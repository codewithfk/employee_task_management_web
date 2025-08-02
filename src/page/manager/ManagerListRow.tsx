import { ActionIcon, Group, Table, Text } from '@mantine/core'
import { IconEdit, IconTrash } from '@tabler/icons-react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { employeeManagerListApi, employeesDeleteApi } from '../../api/employees/employees'
import CustomTooltip from '../../components/customTooltip/CustomTooltip'
import DeleteActionButton from '../../components/deleteActionButton/DeleteActionButton'
import CustomModal from '../../components/customModal/CustomModal'
import AssignEmployee from './AssignEmployee'
import CustomAvatarGroup from '../../components/customAvatarGroup/CustomAvatarGroup'
import ManagerEmployee from './ManagerEmployee'
interface TManagerListRow{
    element:TEmployeesResponse
    index:number
}
function ManagerListRow({element,index}:TManagerListRow) {
    const {mutate,isPending} = useMutation({mutationFn:employeesDeleteApi,onSuccess:(_,payload)=>{
        const {close} = payload
        close && close()
    }})
 
  return (
    <Table.Tr>
    <Table.Td>
      <Text size="sm">{index + 1}</Text>
    </Table.Td>
    <Table.Td>
      <Text lineClamp={1} size="sm">{element.name}</Text>
    </Table.Td>
    <Table.Td>
      <Text lineClamp={1} size="sm">{element.
    email}</Text>
    </Table.Td>
    <Table.Td>
     <ManagerEmployee id={element?.id} />
   
    </Table.Td>
   
    <Table.Td>
      <Group wrap="nowrap">
      <CustomModal
          actionElement={
            <CustomTooltip label="Add Assign Employee">
              <ActionIcon size={"sm"}>
                <IconEdit size={14} />
              </ActionIcon>
            </CustomTooltip>
          }
          label="Add Assign Employee"
        >
          <AssignEmployee data={element} />
        </CustomModal>
        <DeleteActionButton
          actionElement={
            <CustomTooltip label="Delete">
              <ActionIcon size={"sm"}>
                <IconTrash size={14} />
              </ActionIcon>
            </CustomTooltip>
          }
          isLoading={isPending}
          onConfirm={(close) => mutate({id:element?.id,close})}
          actionType="delete"
        />
      </Group>
    </Table.Td>
  </Table.Tr>
  )
}

export default ManagerListRow