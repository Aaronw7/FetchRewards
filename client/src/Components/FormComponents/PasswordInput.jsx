import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  isError
} from '@chakra-ui/react';

function PasswordInput(props) {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [input, setInput] = useState(' ')
  const handleInputChange = (e) => {
    props.onChange();
    setInput(e.target.value)
  }
  const isError = input === ''

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder='Enter password'
          name='password'
          value={props.value}
          onChange={handleInputChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick} variant='outline'>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
      {!isError ? (
        <FormHelperText>
          Please enter your password
        </FormHelperText>
      ) : (
        <FormErrorMessage>Your password is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default PasswordInput;