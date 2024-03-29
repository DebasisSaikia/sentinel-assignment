'use client'
import DashboardView from '@/components/dashboards'
import Navbar from '@/components/navbar'
import React from 'react'
import { styled } from 'styled-components'

const DasboardContainer = styled.div`
background-color: rgb(9,10,15);
padding: 40px;
`
const InnerContainer = styled.div`
border-radius: 8px;
`

const Dashboard = () => {
  return (
    <DasboardContainer>
      <InnerContainer>
        <Navbar/>
        <DashboardView/>
      </InnerContainer>
    </DasboardContainer>
  )
}

export default Dashboard
