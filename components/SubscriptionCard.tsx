"use client";

import { useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import { SUBSCRIPTION_CONTRACT_ADDRESS, SUBSCRIPTION_ABI } from "@/lib/contracts";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

interface SubscriptionTier {
  id: number;
  name: string;
  price: string;
  duration: number;
  features: string[];
  popular?: boolean;
}

const tiers: SubscriptionTier[] = [
  {
    id: 0,
    name: "Free",
    price: "0",
    duration: 30,
    features: [
      "Basic lessons",
      "Limited NFT rewards",
      "1 child profile",
      "Community support",
    ],
  },
  {
    id: 1,
    name: "Basic",
    price: "0.01",
    duration: 30,
    features: [
      "All lessons",
      "Unlimited NFT rewards",
      "Up to 3 child profiles",
      "Priority support",
      "Progress tracking",
    ],
    popular: true,
  },
  {
    id: 2,
    name: "Premium",
    price: "0.025",
    duration: 30,
    features: [
      "Everything in Basic",
      "Exclusive NFT collectibles",
      "Unlimited child profiles",
      "Advanced analytics",
      "Early access to new content",
      "NFT marketplace access",
    ],
  },
];

export function SubscriptionCard() {
  const { address, isConnected } = useAccount();
  const [selectedTier, setSelectedTier] = useState<number | null>(null);
  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const handleSubscribe = (tier: SubscriptionTier) => {
    if (!isConnected || !address) return;

    setSelectedTier(tier.id);
    
    writeContract({
      address: SUBSCRIPTION_CONTRACT_ADDRESS,
      abi: SUBSCRIPTION_ABI,
      functionName: "subscribe",
      args: [tier.id, BigInt(tier.duration * 24 * 60 * 60)],
      value: parseEther(tier.price),
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {tiers.map((tier) => (
        <div
          key={tier.id}
          className={`relative bg-gray-800 rounded-2xl p-6 border-2 ${
            tier.popular ? "border-blue-500" : "border-gray-700"
          } hover:border-blue-400 transition-all`}
        >
          {tier.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
          )}

          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-4xl font-bold text-blue-500">{tier.price}</span>
              <span className="text-gray-400">OKB</span>
            </div>
            <p className="text-gray-400 text-sm mt-1">per month</p>
          </div>

          <ul className="space-y-3 mb-6">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircleIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleSubscribe(tier)}
            disabled={!isConnected || isPending || isConfirming}
            className={`w-full py-3 rounded-lg font-medium transition-colors ${
              tier.popular
                ? "bg-blue-500 text-white hover:bg-blue-600"
                : "bg-gray-700 text-white hover:bg-gray-600"
            } disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {isPending && selectedTier === tier.id
              ? "Confirming..."
              : isConfirming && selectedTier === tier.id
              ? "Processing..."
              : isSuccess && selectedTier === tier.id
              ? "Subscribed!"
              : tier.id === 0
              ? "Get Started"
              : "Subscribe Now"}
          </button>
        </div>
      ))}
    </div>
  );
}
