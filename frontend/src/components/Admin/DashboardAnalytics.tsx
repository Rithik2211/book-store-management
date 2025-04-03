import React, { FC } from 'react'
import PieChart from '../Charts/PieChart'
import BarChart from '../Charts/BarChart'

interface AnalyticsInterface{
    pieChartData : any;
    barChartLabel : string[];
    barChartAverage : number[];
}

const DashboardAnalytics: FC<AnalyticsInterface> = ({pieChartData, barChartLabel, barChartAverage}) => {
  return (
    <div className='flex flex-row justify-between items-center gap-3 my-[30px] mx-[5px]'>
        <PieChart pieChartData={pieChartData}/>
        <BarChart barChartLabel={barChartLabel} barChartAverage={barChartAverage}/>
      </div>
  )
}

export default DashboardAnalytics