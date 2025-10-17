# EduQuest X - Gamified Learning on X Layer

A mobile-first educational dApp for children (5-10) offering gamified learning, NFT rewards, and secure parent management on X Layer blockchain.

## Features

- 🎓 **Gamified Learning**: Interactive lessons with blockchain-verified achievements
- 🏆 **NFT Rewards**: Earn unique ERC-721 and ERC-1155 NFTs for milestones
- 👨‍👩‍👧 **Parent Dashboard**: Manage subscriptions and track child progress
- 💰 **Low Gas Fees**: Built on X Layer for negligible transaction costs
- 🔒 **Secure**: OKX Wallet integration with transparent on-chain records

## Tech Stack

- **Frontend**: Next.js 15 + React 19
- **Blockchain**: X Layer (Chain ID: 196)
- **Wallet**: Wagmi v2 + Viem
- **Styling**: Tailwind CSS
- **Icons**: Heroicons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` file:
```bash
cp .env.example .env.local
```

3. (Optional) Add your WalletConnect Project ID to `.env.local`:
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```
Get your project ID at [WalletConnect Cloud](https://cloud.walletconnect.com)

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Wallet Connection

The app supports multiple wallet options:

- **OKX Wallet** (Recommended) - Best for X Layer
- **MetaMask** - Popular browser wallet
- **Coinbase Wallet** - Coinbase's wallet solution
- **WalletConnect** - Connect any mobile wallet via QR code

### Installing OKX Wallet

1. Visit [OKX Wallet](https://www.okx.com/web3)
2. Install the browser extension
3. Create or import your wallet
4. Connect to the app and switch to X Layer network

The app will automatically prompt you to switch to X Layer (Chain ID: 196) if you're on a different network.

## X Layer Configuration

- **Chain ID**: 196
- **RPC**: https://rpc.xlayer.tech
- **Native Token**: OKB (18 decimals)
- **Explorer**: https://www.okx.com/explorer/xlayer

## Smart Contracts

Deploy the following contracts to X Layer:

1. **SubscriptionContract**: Manages parent subscriptions
2. **AchievementNFT**: ERC-721 for unique achievement badges
3. **CollectibleNFT**: ERC-1155 for repeatable collectibles

Update contract addresses in `lib/contracts.ts` after deployment.

## Subscription Tiers

- **Free**: Basic lessons, limited NFTs, 1 child profile
- **Basic**: All lessons, unlimited NFTs, 3 child profiles (0.01 OKB/month)
- **Premium**: Everything + exclusive NFTs, unlimited profiles (0.025 OKB/month)

## License

MIT
