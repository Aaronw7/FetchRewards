import React from 'react';
import ReactDOM from 'react-dom';
import {
  ChakraProvider,
  Center,
  Stack,
  Heading
} from '@chakra-ui/react'
import { myTheme } from './styles/theme.js';
import axios from 'axios';
import Form from './components/Form.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupations: [],
      states: [],
      submitted: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const Url = 'https://frontend-take-home.fetchrewards.com/form';
    axios({
      method: 'get',
      url: 'https://frontend-take-home.fetchrewards.com/form',
    })
    .then(result => this.setState({
      occupations: result.data.occupations,
      states: result.data.states
    }))
    .catch(err => console.log(err))
  }

  handleSubmit() {
    this.setState({submitted: true})
  }

  render () {
    return (
      <ChakraProvider theme={myTheme}>
        <Center>
          <Stack spacing='25px'>
            <Heading size='3xl' color='teal'>Fetch Rewards</Heading>
            <Form occupations={this.state.occupations} states={this.state.states} submitted={this.state.submitted} handleSubmit={this.handleSubmit}/>
          </Stack>
        </Center>
      </ChakraProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));