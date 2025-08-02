import { Button, PasswordInput, TextInput } from '@mantine/core'
import React from 'react'
import useAddEmployee from './useAddEmployee'
import { TAddManager } from '../manager/AddManager'

function AddEmployee({handleClose,viewData}:TAddManager) {
    const {form:{getInputProps},handleSubmit,isPending} = useAddEmployee(viewData,handleClose)
  return (
    <div>  <TextInput
    label="Name"
    placeholder="Enter Your Name"
    {...getInputProps("name")}
    required
    mb={"xs"}
  />
    <TextInput
    label="Email"
    placeholder="Enter Your Email"
    {...getInputProps("email")}
    required
    mb={"xs"}
  />
{!viewData?.id && <PasswordInput
    label="Password"
    placeholder="Your password"
    {...getInputProps("password")}
    required
    mb={"xs"}
  /> }
 
   <Button loading={isPending} fullWidth  onClick={() => handleSubmit()} mt={'md'}>
            Crate
          </Button></div>
  )
}

export default AddEmployee