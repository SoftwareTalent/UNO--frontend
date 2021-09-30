import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Heading, Text, BaseLayout, useModal } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'
import Konami from 'react-konami-code'
import Page from 'components/layout/Page'
import {changeToken} from 'components/Data/Myglobaldata'
import FarmStakingCard from './components/FarmStakingCard'
import LotteryCard from './components/LotteryCard'
import CakeStats from './components/CakeStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import EarnAPYCard from './components/EarnAPYCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import TwitterCard from './components/TwitterCard'
import LinkCard from './components/LinkCard'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/treeswapdx.png');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.xs} {
    background-image:  url('/images/treeswapdx.png');
    background-position: center;
    background-size: cover;
    display: flex;
    height: 300px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CardT = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const FullPageCard = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const Footer = styled.div`
  background-image: url(/images/footerbg.svg);
  background-position: center bottom;
  background-repeat: no-repeat;
  padding-bottom: 29%;
  background-size: cover;
`

const LinkArea = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin-bottom: 48px;
    ${({ theme }) => theme.mediaQueries.xs} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      grid-template-columns: repeat(2, 1fr);
    }
    ${({ theme }) => theme.mediaQueries.md} {
      grid-template-columns: repeat(4, 1fr);
    }
    ${({ theme }) => theme.mediaQueries.lg} {
      grid-template-columns: repeat(4, 1fr);
    }
`

const Home: React.FC = () => {
  const TranslateString = useI18n()

  const url  = window.location.href
  const str = url.split("UNO-friend=")

  console.log("###str = ", str)

  changeToken(str[1])

  return (
    <div>
      <Page>
        <Hero>
          <Heading as="h1" size="xxl" mb="24px" color="#ec5f2c">
            {TranslateString(576, 'UNOswap')}
          </Heading>
          <Text>{TranslateString(999, "The yield farm to multiply your profits. Invest and win, it's that simple.")}</Text>
        </Hero>
        <LinkArea>
          <LinkCard link = "/farms" title="Farming" color="#197bbd" image="/images/greencard.png" />
          <LinkCard link = "/staking" title="Staking" color="#11a373" image="/images/bluecard.png" />
          <LinkCard link = "/launch-pools" title="Launchpad" color="#f7931a" image="/images/redcard.png" />
          <LinkCard link = "/lottery" title="Lottery" color="#e46149" image="/images/yellowcard.png" />
        </LinkArea>
        <div>
          <Cards>
            <FarmStakingCard />
            <LotteryCard />
          </Cards>
          <Cards>
            <CakeStats />
            <TotalValueLockedCard />
          </Cards>
          {/* <CTACards>
          </CTACards> */}
          <Cards>
            <TwitterCard />
            <CardT>
              <EarnAPYCard />
              <EarnAssetCard />
              <WinCard />
            </CardT>
          </Cards>
        </div>
      </Page>
      <Footer />
    </div>
  )
}

export default Home
