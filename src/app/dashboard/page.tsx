'use client'
import Navbar from '@/components/navbar'
import React from 'react'
import { styled } from 'styled-components'

const DasboardContainer = styled.div`
height: 100vh; 
background-color: rgb(9,10,15);
padding: 40px;
`
const InnerContainer = styled.div`
border-radius: 8px;
height: 90vh;
`

const Dashboard = () => {
  return (
    <DasboardContainer>
      <InnerContainer>
        <Navbar/>
      </InnerContainer>
    </DasboardContainer>
  )
}

export default Dashboard
