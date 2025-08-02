import { ActionIcon, Badge, Group, Table, Text } from '@mantine/core'
import moment from 'moment'
import React from 'react'
import CustomTooltip from '../../components/customTooltip/CustomTooltip'
import CustomModal from '../../components/customModal/CustomModal'
import { IconEdit, IconEye, IconTrash } from '@tabler/icons-react'
import AddTask from './AddTask'
import DeleteActionButton from '../../components/deleteActionButton/DeleteActionButton'
import ViewTask from './ViewTask'
import CustomAvatarGroup from '../../components/customAvatarGroup/CustomAvatarGroup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTaskApi } from '../../api/task/task'
interface TTaskTableRow{
    element:TTaskListResponse,
    index:number
}
function TaskTableRow({element,index}:TTaskTableRow) {
  const queryClient = useQueryClient();
  const {mutate,isPending} = useMutation({mutationFn:deleteTaskApi,onSuccess:async(_,payload)=>{
const {close} = payload
await queryClient.invalidateQueries({ queryKey: ["taskList"] });
close && close()
  }})
  return (
    <Table.Tr>
    <Table.Td>
      <Text size="sm">{index + 1}</Text>
    </Table.Td>
    <Table.Td>
      <Text lineClamp={1} size="sm">{element.title}</Text>
    </Table.Td>
    <Table.Td>
      <Text lineClamp={1} size="sm">{element.description}</Text>
    </Table.Td>
    <Table.Td>
      <Text lineClamp={1} size="sm">{element.assignedBy?.name}</Text>
    </Table.Td>
    <CustomAvatarGroup
          data={element?.assignedTo?.map((ele) => ({
            src: "",
            name: ele?.name,
          }))}
        />
    <Table.Td>
        <CustomTooltip label={element?.status}>
        <Badge color={element?.status === 'completed'?'green':element?.status === 'reviewed'?'blue':'yellow'}>
        {element?.status}
      </Badge>
        </CustomTooltip>
   
    </Table.Td>
    <Table.Td>
 <Text>{moment(element?.deadline).format('MMM DD YYYY')}</Text>
    </Table.Td>
    <Table.Td>
      <Group wrap="nowrap">
      <CustomModal
          actionElement={
            <CustomTooltip label="View">
            <ActionIcon size={"sm"}>
      <IconEye size={14}/>
      </ActionIcon>
          </CustomTooltip>
          }
          label="View Task"
        ><ViewTask data={element} /></CustomModal>
     
        <CustomModal
          actionElement={
            <CustomTooltip label="Edit">
              <ActionIcon size={"sm"}>
                <IconEdit size={14} />
              </ActionIcon>
            </CustomTooltip>
          }
          label="Update Service"
        >
          <AddTask viewData={element}/>
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
          onConfirm={(close) => mutate({id:element?._id,close})}
          actionType="delete"
        />
      </Group>
    </Table.Td>
  </Table.Tr>
  )
}

export default TaskTableRow