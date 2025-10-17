export const SUBSCRIPTION_CONTRACT_ADDRESS = "0x0000000000000000000000000000000000000000";
export const ACHIEVEMENT_NFT_ADDRESS = "0x0000000000000000000000000000000000000000";
export const COLLECTIBLE_NFT_ADDRESS = "0x0000000000000000000000000000000000000000";

export const SUBSCRIPTION_ABI = [
  {
    inputs: [
      { name: "tier", type: "uint8" },
      { name: "duration", type: "uint256" },
    ],
    name: "subscribe",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ name: "parent", type: "address" }],
    name: "getSubscription",
    outputs: [
      { name: "tier", type: "uint8" },
      { name: "startDate", type: "uint256" },
      { name: "endDate", type: "uint256" },
      { name: "isActive", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export const ACHIEVEMENT_NFT_ABI = [
  {
    inputs: [
      { name: "to", type: "address" },
      { name: "achievementType", type: "uint8" },
      { name: "metadataURI", type: "string" },
    ],
    name: "mintAchievement",
    outputs: [{ name: "tokenId", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ name: "owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
] as const;
