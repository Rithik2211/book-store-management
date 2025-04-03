import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const DashboardHistory = () => {
    return (
        <div className='flex flex-col gap-3 my-[30px] mx-[5px]'>
            <h2 className='text-start text-2xl font-medium text-gray-600'>Order History</h2>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Order Success</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Order Processed</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="secondary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Order Shipped</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    </TimelineSeparator>
                    <TimelineContent>Order Delivered</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
      );
}

export default DashboardHistory;