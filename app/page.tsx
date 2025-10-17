"use client";

import { WalletConnect } from "@/components/WalletConnect";
import { SubscriptionCard } from "@/components/SubscriptionCard";
import { NFTGallery } from "@/components/NFTGallery";
import { ChildProfile } from "@/components/ChildProfile";
import { NetworkStatus } from "@/components/NetworkStatus";
import { useAccount } from "wagmi";
import { 
  AcademicCapIcon, 
  SparklesIcon, 
  ShieldCheckIcon,
  CurrencyDollarIcon 
} from "@heroicons/react/24/outline";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900 bg-opacity-50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <AcademicCapIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">EduQuest X</h1>
                <p className="text-gray-400 text-xs">Powered by X Layer</p>
              </div>
            </div>
            <WalletConnect />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Gamified Learning on the
            <span className="text-blue-500"> Blockchain</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Educate, earn, and explore with NFT rewards. Built on X Layer for
            lightning-fast transactions and negligible gas fees.
          </p>

          {!isConnected && (
            <div className="flex justify-center">
              <WalletConnect />
            </div>
          )}

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-blue-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <SparklesIcon className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">NFT Rewards</h3>
              <p className="text-gray-400 text-sm">
                Earn unique NFTs for every achievement and milestone
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-green-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <ShieldCheckIcon className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Secure & Transparent</h3>
              <p className="text-gray-400 text-sm">
                Blockchain-verified progress and achievements
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-yellow-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CurrencyDollarIcon className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Low Gas Fees</h3>
              <p className="text-gray-400 text-sm">
                Powered by X Layer's efficient infrastructure
              </p>
            </div>

            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="w-12 h-12 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <AcademicCapIcon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-white font-semibold mb-2">Quality Content</h3>
              <p className="text-gray-400 text-sm">
                Age-appropriate lessons for children 5-10
              </p>
            </div>
          </div>
        </div>
      </section>

      {isConnected && (
        <>
          {/* Network Status */}
          <section className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <NetworkStatus />
            </div>
          </section>

          {/* Child Profiles */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50">
            <ChildProfile />
          </section>

          {/* NFT Gallery */}
          <section className="py-12 px-4 sm:px-6 lg:px-8">
            <NFTGallery />
          </section>

          {/* Subscription Plans */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 bg-opacity-50">
            <div className="max-w-7xl mx-auto mb-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-gray-300 text-lg">
                Unlock the full potential of blockchain-powered education
              </p>
            </div>
            <SubscriptionCard />
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <AcademicCapIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">EduQuest X</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a
                href="https://www.okx.com/explorer/xlayer"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                Explorer
              </a>
              <a
                href="https://docs.xlayer.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
              >
                Docs
              </a>
              <span>Chain ID: 196</span>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-500 text-sm">
            <p>Built on X Layer - OKX's Layer 2 Solution</p>
            <p className="mt-1">© 2024 EduQuest X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
