import { Button, PasswordInput, TextInput } from '@mantine/core'
import useAddManager from './useAddManager';
export interface TAddManager{
    viewData?:TEmployeesResponse
    handleClose?:VoidFunction
}
function AddManager({handleClose,viewData}:TAddManager) {
    const {
        form: { getInputProps },
        handleSubmit,
        isPending
      } = useAddManager(viewData,handleClose);
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
          </Button>
  </div>
  )
}

export default AddManager