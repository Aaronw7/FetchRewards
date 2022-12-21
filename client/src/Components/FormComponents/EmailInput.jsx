import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  isError
} from '@chakra-ui/react';

function EmailInput(props) {
  const [input, setInput] = useState(' ')

  const handleInputChange = (e) => {
    props.onChange();
    setInput(e.target.value)
  }

  const isError = input === ''

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>Email</FormLabel>
      <Input name='email' value={props.email} onChange={handleInputChange}/>
      {!isError ? (
        <FormHelperText>
          Enter your Fetch Rewards email!
        </FormHelperText>
      ) : (
        <FormErrorMessage>Your Fetch Rewards email is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default EmailInput;