import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  isError
} from '@chakra-ui/react';

function NameInput(props) {
  const [input, setInput] = useState(' ')

  const handleInputChange = (e) => {
    props.onChange();
    setInput(e.target.value)
  }

  const isError = input === ''

  return (
    <FormControl isInvalid={isError} isRequired>
      <FormLabel>Full Name</FormLabel>
      <Input name='name' value={props.name} onChange={handleInputChange}/>
      {!isError ? (
        <FormHelperText>
          Please enter your first and last name
        </FormHelperText>
      ) : (
        <FormErrorMessage>Your full name is required.</FormErrorMessage>
      )}
    </FormControl>
  )
}

export default NameInput;