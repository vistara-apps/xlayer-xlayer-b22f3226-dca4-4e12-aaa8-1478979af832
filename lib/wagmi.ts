import { createConfig, http } from "wagmi";
import { defineChain } from "viem";
import { injected, walletConnect, coinbaseWallet } from "wagmi/connectors";

export const xLayer = defineChain({
  id: 196,
  name: "X Layer",
  nativeCurrency: {
    decimals: 18,
    name: "OKB",
    symbol: "OKB",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.xlayer.tech"],
    },
    public: {
      http: ["https://rpc.xlayer.tech"],
    },
  },
  blockExplorers: {
    default: {
      name: "OKX Explorer",
      url: "https://www.okx.com/explorer/xlayer",
    },
  },
  contracts: {},
});

// Get WalletConnect project ID from environment or use a working demo ID
const walletConnectProjectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "3fbb6bba6f1de962d911bb5b5c9dba88";

export const config = createConfig({
  chains: [xLayer],
  connectors: [
    injected({
      target: {
        id: "okx",
        name: "OKX Wallet",
        provider: (window) => (window as any)?.okxwallet,
      },
    }),
    injected({
      target: "metaMask",
    }),
    coinbaseWallet({
      appName: "EduQuest X",
      appLogoUrl: "https://eduquest.x-layer.com/logo.png",
    }),
    walletConnect({
      projectId: walletConnectProjectId,
      metadata: {
        name: "EduQuest X",
        description: "Gamified Learning on X Layer",
        url: "https://eduquest.x-layer.com",
        icons: ["https://eduquest.x-layer.com/logo.png"],
      },
      showQrModal: true,
    }),
  ],
  transports: {
    [xLayer.id]: http("https://rpc.xlayer.tech"),
  },
  ssr: true,
});
