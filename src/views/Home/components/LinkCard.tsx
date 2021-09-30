import React from 'react'
import styled from 'styled-components'
import { Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import BigNumber from 'bignumber.js'
import useI18n from 'hooks/useI18n'
import useAllEarnings from 'hooks/useAllEarnings'
import CardValue from './CardValue'

const Link = styled.a`
  width: 100%;
  
`

const CardWraper = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};  
  margin-left: auto;
  margin-right: auto;
  
  height: 250px;
  width: 100%;
  cursor: pointer;
  border-radius: 19px;
`

const Content = styled.div`
  padding: 24px;
`
const LinkImage = styled.img`
  width: 90px;
  margin-top: 24px;
  -webkit-align-items: center;
  display: flex;
   justify-content: center;
   align-items: center;
`

const StyledText = styled(Text)`
  font-size: 24px;
  text-align: center;
  font-weight: bold;
`

interface LinkCardProps {
  title: string
  color: string
  image: string
  link: string
}

const LinkCard = ({link, title, color, image} : LinkCardProps) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  return (
      <Link href={link}>
        <CardWraper color={color} >
          <Content>
            <StyledText>{title}</StyledText>
            <LinkImage src={image} alt="Link Image" />
          </Content>
        </CardWraper>
      </Link>
    )
}

export default LinkCard
