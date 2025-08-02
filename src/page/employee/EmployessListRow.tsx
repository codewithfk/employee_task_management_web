import { ActionIcon, Group, Table, Text } from '@mantine/core'
import React from 'react'
import DeleteActionButton from '../../components/deleteActionButton/DeleteActionButton'
import CustomTooltip from '../../components/customTooltip/CustomTooltip'
import { IconTrash } from '@tabler/icons-react'
import { useMutation } from '@tanstack/react-query'
import { employeesDeleteApi } from '../../api/employees/employees'
interface TManagerListRow{
    element:TEmployeesResponse
    index:number
}
function EmployessListRow({element,index}:TManagerListRow) {
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
      <Group wrap="nowrap">
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

export default EmployessListRow