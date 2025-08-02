import React from 'react'
import useTask from './useTask'
import LoadingErrorContainer from '../../components/placeholders/LoadingErrorContainer'
import DataTable from '../../components/dataTable/DataTable'
import CustomModal from '../../components/customModal/CustomModal'
import CustomTooltip from '../../components/customTooltip/CustomTooltip'
import { ActionIcon, Group, Select } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import AddTask from './AddTask'
import TaskTableRow from './TaskTableRow'

function Task() {
    const {query:{data,isError,isLoading,isRefetching},setPaginated,setTaskSearch,setStatus} = useTask()
    const rows = data?.data?.map((item,index)=><TaskTableRow key={item?._id} element={item} index={index}/>)
  return (
    <LoadingErrorContainer isPaperEnable={false} isError={isError} isLoading={isLoading} isRefetching={isRefetching}>
    <DataTable
      rightSection={
        <Group>
 <CustomModal
          actionElement={
            <CustomTooltip label="Add Task">
              <ActionIcon w={50} h={30} mr={"xs"}>
                <IconPlus stroke={2} />
              </ActionIcon>
            </CustomTooltip>
          }
          label="Add Task"
        >
          <AddTask />
        </CustomModal>
        <Select
      placeholder="Pick status"
      data={['reviewed', 'completed', 'pending']}
     onChange={(value)=>setStatus(value!)}
     mr={'md'}
    />
        </Group>
       
      }
      dataLength={data?.data?.length??0}
      headerTitle={["S.No", "Name", "Description","AssignedBy","AssignedTo","Status", "Deadline", "Action"]}
      title="Task List"
      metaType={{last_page:data?.totalPages,current_page:data?.page}}
      onChangePage={setPaginated}
      onChangeSearch={setTaskSearch}
    >
      {rows}
    </DataTable>
  </LoadingErrorContainer>
  )
}

export default Task