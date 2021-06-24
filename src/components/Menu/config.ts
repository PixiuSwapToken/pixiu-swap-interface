import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://pixiuswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      // {
      //   label: 'LP Migration',
      //   href: '/migrate',
      // },
      {
        label: 'Exchange',
        href: 'https://exchange.pixiuswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pixiuswap.finance/#/pool',
      },
      // {
      //   label: 'V1 Liquidity (Old)',
      //   href: '/pool',
      // },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://pixiuswap.finance/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://pixiuswap.finance/pools',
  },
  {
    label: 'Prediction',
    icon: 'PredictionsIcon',
    href: 'https://pixiuswap.finance/#',
    status: {
      text: 'COMING SOON',
      color: 'warning',
    },
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://pixiuswap.finance/#',
    status: {
      text: 'COMING SOON',
      color: 'warning',
    },
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://pixiuswap.finance/#',
    status: {
      text: 'COMING SOON',
      color: 'warning',
    },
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://pixiuswap.finance/#',
    status: {
      text: 'COMING SOON',
      color: 'warning',
    },
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://pixiuswap.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://pixiuswap.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://pixiuswap.finance/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pixiuswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pixiuswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pixiuswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pixiuswap.info/accounts',
      },
      {
        label: 'PixiuSwap Token',
        href: 'https://bscscan.com/address/0xca92ab56378b0bc3615a17eabdd0ea65e0dc9bd8',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://pixiuswap.finance/#',
    status: {
      text: 'COMING SOON',
      color: 'warning',
    },
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.pixiuswap.finance/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.pixiuswap.finance',
      },
      {
        label: 'Github',
        href: 'https://github.com/PixiuSwap',
      },
      {
        label: 'Docs',
        href: 'https://docs.pixiuswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
]

export default config
