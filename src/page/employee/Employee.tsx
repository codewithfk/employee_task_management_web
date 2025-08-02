import React, { useMemo } from 'react'
import LoadingErrorContainer from '../../components/placeholders/LoadingErrorContainer'
import DataTable from '../../components/dataTable/DataTable'
import CustomModal from '../../components/customModal/CustomModal'
import CustomTooltip from '../../components/customTooltip/CustomTooltip'
import { ActionIcon } from '@mantine/core'
import { IconPlus } from '@tabler/icons-react'
import useManager from '../manager/useManager'
import ManagerListRow from '../manager/ManagerListRow'
import AddManager from '../manager/AddManager'
import useEmployee from './useEmployee'
import EmployessListRow from './EmployessListRow'
import AddEmployee from './AddEmployee'

function Employee() {
    const {query:{data,isError,isLoading,isRefetching},handlePageChange,setSearch} = useEmployee()
    const rows = data?.data?.map((item,index)=> <EmployessListRow key={item?.id} element={item} index={index}/>)
  return (
    <LoadingErrorContainer isPaperEnable={false} isError={isError} isLoading={isLoading} isRefetching={isRefetching}>
    <DataTable
      rightSection={
        <CustomModal
          actionElement={
            <CustomTooltip label="Add Employees">
              <ActionIcon w={50} h={30} mr={"xs"}>
                <IconPlus stroke={2} />
              </ActionIcon>
            </CustomTooltip>
          }
          label="Add Employees"
        >
          <AddEmployee />
        </CustomModal>
      }
      dataLength={data?.data?.length??0}
      headerTitle={["S.No", "Name", "Email", "Action"]}
      title="Employees List"
      metaType={{last_page:data?.totalPages,current_page:data?.page}}
      onChangePage={handlePageChange}
      onChangeSearch={setSearch}
    >
      {rows}
    </DataTable>
  </LoadingErrorContainer>
  )
}

export default Employee