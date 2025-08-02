import { Button, MultiSelect, Text } from "@mantine/core";
import useAssignEmployee from "./useAssignEmployee";
interface TAssignEmployee{
    handleClose?:VoidFunction,
    data?:TEmployeesResponse
}
function AssignEmployee({data,handleClose}:TAssignEmployee) {
  const {
    employeesList,
    form: { getInputProps },
    handleSubmit
  } = useAssignEmployee( handleClose,
    data);
  return (
    <div>
      <MultiSelect
        label="Employees"
        placeholder="Enter Employees"
        data={employeesList}
        mb={"sm"}
        {...getInputProps("emploiesId")}
      />
      <Button onClick={()=>handleSubmit()} fullWidth><Text>Assign</Text></Button>
    </div>
  );
}

export default AssignEmployee;
