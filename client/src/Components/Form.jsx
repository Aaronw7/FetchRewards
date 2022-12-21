import React from 'react';
import axios from 'axios';
import {
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  Button
} from '@chakra-ui/react';
import NameInput from './FormComponents/NameInput.jsx';
import EmailInput from './FormComponents/EmailInput.jsx';
import PasswordInput from './FormComponents/PasswordInput.jsx';
import SubAlert from './FormComponents/SubAlert.jsx';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      occupation: '',
      state: ''
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange (e) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit (e) {
    e.preventDefault();

    axios({
      method: 'post',
      url: '/postForm',
      data: this.state
    })
    .then(this.props.handleSubmit())
  }

  render() {
    let alert;
    if (this.props.submitted) {
      console.log('does this work?')
      alert = <SubAlert/>;
    } else {
      alert = <></>;
    }
    return (<div>
      <form onSubmit={this.handleSubmit}>
        <Stack spacing='15px'>
          <NameInput value={this.state.name} onChange={this.onChange}/>
          <EmailInput value={this.state.email} onChange={this.onChange}/>
          <PasswordInput value={this.state.password} onChange={this.onChange}/>
          <FormControl isRequired>
            <FormLabel>Occupation</FormLabel>
            <Select name='occupation' value={this.state.occupation} onChange={this.onChange} placeholder='Choose here'>
              {this.props.occupations.map((occupation, i) => <option value={occupation} key={i}>{occupation}</option>)}
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>State</FormLabel>
            <Select name='state' value={this.state.states} onChange={this.onChange} placeholder='Choose here'>
              {this.props.states.map((state, i) => <option value={state.name} key={i}>{state.name}</option>)}
            </Select>
          </FormControl>
          {alert}
          <Button type='submit' value='Submit' onClick={this.onSubmit}>Submit</Button>
        </Stack>
      </form>
    </div>)
  }
}

export default Form;