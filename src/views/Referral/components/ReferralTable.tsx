import React, {useState} from 'react'
import styled from 'styled-components'
import { Card, Text } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import UnlockButton from 'components/UnlockButton'
import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import referralABI from 'config/abi/referral.json'

const Hero = styled.div`
  align-items: center;
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  padding: 24px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
  }
`
const ReferralTable: React.FC = () => {
  const { account } = useWallet()
  const [referralFriends, setReferralFriends] = useState(0)
  const [totalReferralCommissions, setTotalReferralCommissions] = useState(0)

  const web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
  const referralContract = new web3.eth.Contract((referralABI as unknown) as AbiItem, '0xb66950740BB203fc58eCD959E5FA394BBf40a606');


  const getReferralFriends = async () => {
    const referrals = await referralContract.methods.referralsCount(account).call();
    setReferralFriends(referrals)
    return referrals
  }

  const getTotalReferralCommissions = async () => {
    const referralCommissions = await referralContract.methods.totalReferralCommissions(account).call();
    setTotalReferralCommissions(referralCommissions)
    return referralCommissions
  }

  getReferralFriends();
  getTotalReferralCommissions();

  return (
    <Card>
      <Hero>
        { account && 
          <>
            <a href={`https://app.UNOswap.com?UNO-friend=${account}`}>
              <Text style={{overflowWrap:'anywhere'}}>{`https://app.UNOswap.com?UNO-friend=${account}`}</Text>
            </a>
            <div style={{marginTop:'15px'}}>
              <Text> Total UNO friends : {referralFriends}</Text>
              <Text>Total Referral Commissions : {totalReferralCommissions/(10**18)} UNOs</Text>
            </div>
          </>
        }
        { !account &&
          <UnlockButton />
        }
      </Hero>
    </Card>
  )
}

export default ReferralTable
