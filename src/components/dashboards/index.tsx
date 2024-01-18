import React from 'react'
import { DashBoardViewContainer } from './styles'
import Sidebar from './sidebar'
import ChartContainer from './chart-container'

const DashboardView = () => {
  return (
    <DashBoardViewContainer>
      <Sidebar/>
     <ChartContainer/>
    </DashBoardViewContainer>
  )
}

export default DashboardView
