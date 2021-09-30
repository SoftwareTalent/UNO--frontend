import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding-top: 96px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    background-image:  url('/images/treeswapdx.png');
    background-position: center;
    height: 200px;
    width: 100%;
    padding-top: 0;
    margin-left: 0;
  }
`
const ReferralPanel: React.FC = () => {
  return (
    <Card>
      <Hero>
         <Text style={{marginBottom:'25px'}}>{`Earn 2% of your UNO friends earnings! use this link to invite friends: `}</Text>
      </Hero>
    </Card>
  )
}

export default ReferralPanel
