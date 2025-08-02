import React, { useMemo } from 'react'
import LoadingErrorContainer from '../../components/placeholders/LoadingErrorContainer'
import DataTable from '../../components/dataTable/DataTable'
import CustomModal from '../../components/customModal/CustomModal'
import CustomTooltip from '../../components/customTooltip/CustomTooltip'
import { ActionIcon } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import AddManager from './AddManager'
import useManager from './useManager'
import ManagerListRow from './ManagerListRow'

function Manager() {
     const {query:{data,isError,isLoading,isRefetching},handlePageChange,setSearch} = useManager()
     const rows = data?.data?.map((item,index)=> <ManagerListRow key={item?.id} element={item} index={index}/>)
  return (
    <LoadingErrorContainer isPaperEnable={false} isError={isError} isLoading={isLoading} isRefetching={isRefetching}>
    <DataTable
      rightSection={
        <CustomModal
          actionElement={
            <CustomTooltip label="Add Manager">
              <ActionIcon w={50} h={30} mr={"xs"}>
                <IconPlus stroke={2} />
              </ActionIcon>
            </CustomTooltip>
          }
          label="Add Manager"
        >
          <AddManager />
        </CustomModal>
      }
      dataLength={data?.data?.length??0}
      headerTitle={["S.No", "Name", "Email","Employees", "Action"]}
      title="Manager List"
      metaType={{last_page:data?.totalPages,current_page:data?.page}}
      onChangePage={handlePageChange}
      onChangeSearch={setSearch}
    >
      {rows}
    </DataTable>
  </LoadingErrorContainer>
  )
}

export default Manager