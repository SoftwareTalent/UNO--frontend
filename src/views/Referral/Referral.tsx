import React from 'react'
import styled from 'styled-components'
import { BaseLayout } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'

import ReferralPanel from './components/Refinfo'
import ReferralTable from './components/ReferralTable'

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 48px;

  & > div {
    grid-column: span 12;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 12;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 12;
    }
  }
`

const Referral: React.FC = () => {
  return (
    <Page>
      <Cards>
        <ReferralPanel />
        <ReferralTable />
      </Cards>
    </Page>
  )
}

export default Referral
