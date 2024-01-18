import React from 'react'
import { MainContainer } from './styles'
import TopCards from '../top-cards'
import BarChart from '../bar-charts'
import TableDashboard from '../table'

const ChartContainer = () => {
  return (
    <MainContainer>
      <TopCards/>
      <BarChart/>
      <TableDashboard/>
    </MainContainer>
  )
}

export default ChartContainer
