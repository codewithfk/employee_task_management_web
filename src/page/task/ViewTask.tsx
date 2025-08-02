import { Badge, Group, Text, Title } from '@mantine/core'
import moment from 'moment'
import React from 'react'
interface TViewTask{
    data?:TTaskListResponse
}
function ViewTask({data}:TViewTask) {
  return (
    <div>
        <Title  order={4} mb={'sm'}>{data?.title}</Title>
        <Text fz={'sm'} mb={'sm'}>{data?.description}</Text>
        {data?.notes &&  <Text fz={'sm'} mb={'sm'}><strong>Note:</strong>  {data?.notes}</Text>}
       
        <Text fz={'sm'} mb={'sm'}><strong>AssignedBy:</strong>  {data?.assignedBy?.name}</Text>
        <Group mb={'sm'}>
        <Text fz={'sm'} ><strong>AssignedTo:</strong>  </Text>
        {data?.assignedTo?.map((item,index)=> <Text fz={'sm'} key={index}>{item?.name}</Text>)}
        </Group>
        
        
        <Group justify='space-between'>
        <Text fz={'sm'} ><strong>Deadline:</strong> {moment(data?.deadline).format('MMMM DD, YYYY')}</Text>
        {data?.submittedAt && <Text fz={'sm'} ><strong>Submitted:</strong> {moment(data?.deadline).format('MMMM DD, YYYY')}</Text>}
        
        <Badge color={data?.status === 'completed'?'green':data?.status === 'reviewed'?'blue':'yellow'}>
        {data?.status}
      </Badge>
        
        </Group>
        
    </div>
  )
}

export default ViewTask