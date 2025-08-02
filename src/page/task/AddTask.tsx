import { Button, MultiSelect, Select, Text, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import useAddTask from "./useAddTask";
interface TAddTask{
    handleClose?:VoidFunction
    viewData?:TTaskListResponse
}
function AddTask({handleClose,viewData}:TAddTask) {
  const {
    form: { getInputProps },
    handleSubmit,
    managerList,
    isPending,
    employeesList
  } = useAddTask(handleClose,viewData);
  return (
    <div>
      
      {viewData?.status === 'pending'?<><TextInput
        placeholder="Enter Title"
        label="Title"
        mb={"sm"}
        {...getInputProps("title")}
      />
      <TextInput
        placeholder="Enter Description"
        label="Description"
        mb={"sm"}
        {...getInputProps("description")}
      />
      <DatePickerInput
        label="Deadline"
        placeholder="Enter Deadline"
        minDate={new Date()}
        mb={"sm"}
        {...getInputProps("deadline")}
      />
      <Select
        label="Manager"
        placeholder="Enter Manager"
        data={managerList}
        mb={"sm"}
        {...getInputProps("assignedBy")}
      />
        <MultiSelect
        label="Employees"
        placeholder="Enter Employees"
        data={employeesList}
        mb={"sm"}
        {...getInputProps("assignedTo")}
      />
      {viewData?._id && 
      <>
      <TextInput
        placeholder="Enter Notes"
        label="Notes"
        mb={"sm"}
        {...getInputProps("note")}
      />
          <Select
      label="Status"
      placeholder="Pick status"
      data={['reviewed', 'completed', 'pending']}
      {...getInputProps("status")}
    />
      </>
      }
      <Button fullWidth mt={"sm"} onClick={()=>handleSubmit()} loading={isPending}>
        <Text>Create</Text>
      </Button></>:<Text>Please avoid updating this task as it is currently in the {viewData?.status} stage.</Text>}
      
      
    </div>
  );
}

export default AddTask;
