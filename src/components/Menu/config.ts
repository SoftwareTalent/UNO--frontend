import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'LP Farming',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'UNO Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: '/launch-pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Referral',
    icon: 'ReferralIcon',
    href: '/referral',
  },
  {
    label: 'Audits',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Mythx Audit',
        href: 'https://github.com/UNOswap/Audits/tree/main/Mythx',
      },
      {
        label: 'TechRate Audit(Coming soon)',
        href: '',
      },
      {
        label: 'Certik Audit(Coming soon)',
        href: '',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://UNOswap.gitbook.io/UNO-defi/',
      },
      {
        label: 'Github',
        href: 'https://github.com/UNOswap/',
      },
      {
        label: 'Medium',
        href: 'https://UNOswap.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Partnerships/IFO',
  //   icon: 'GooseIcon',
  //   href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
