import React from 'react'
import { MainContainer } from './styles'
import TopCards from '../top-cards'
import BarChart from '../bar-charts'

const ChartContainer = () => {
  return (
    <MainContainer>
      <TopCards/>
      <BarChart/>
    </MainContainer>
  )
}

export default ChartContainer
