"use client";

import { useState } from "react";
import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { WalletIcon, ArrowRightOnRectangleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { xLayer } from "@/lib/wagmi";
import type { Connector } from "wagmi";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [showModal, setShowModal] = useState(false);

  const handleConnect = (connector: Connector) => {
    try {
      connect({ connector });
      setShowModal(false);
    } catch (error) {
      console.error("Failed to connect:", error);
    }
  };

  const handleSwitchNetwork = () => {
    if (switchChain) {
      switchChain({ chainId: xLayer.id });
    }
  };

  const getConnectorIcon = (name: string) => {
    const lowerName = name.toLowerCase();
    if (lowerName.includes("okx")) return "🦊";
    if (lowerName.includes("metamask")) return "🦊";
    if (lowerName.includes("coinbase")) return "🔵";
    if (lowerName.includes("walletconnect")) return "🔗";
    return "💼";
  };

  if (isConnected && address) {
    const isCorrectNetwork = chainId === xLayer.id;

    return (
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        {!isCorrectNetwork && (
          <button
            onClick={handleSwitchNetwork}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
          >
            Switch to X Layer
          </button>
        )}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-white text-sm font-mono">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        </div>
        <button
          onClick={() => disconnect()}
          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center gap-2"
        >
          <ArrowRightOnRectangleIcon className="w-4 h-4" />
          <span className="text-sm font-medium">Disconnect</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        disabled={isPending}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <WalletIcon className="w-5 h-5" />
        <span className="font-medium">{isPending ? "Connecting..." : "Connect Wallet"}</span>
      </button>

      {/* Wallet Selection Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl max-w-md w-full p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Connect Wallet</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3">
              {connectors.map((connector) => (
                <button
                  key={connector.id}
                  onClick={() => handleConnect(connector)}
                  disabled={isPending}
                  className="w-full flex items-center gap-4 p-4 bg-gray-900 hover:bg-gray-700 rounded-lg transition-all border border-gray-700 hover:border-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-3xl">{getConnectorIcon(connector.name)}</span>
                  <div className="flex-1 text-left">
                    <p className="text-white font-semibold">{connector.name}</p>
                    <p className="text-gray-400 text-sm">
                      {connector.name.includes("OKX") && "Recommended for X Layer"}
                      {connector.name.includes("MetaMask") && "Popular browser wallet"}
                      {connector.name.includes("Coinbase") && "Coinbase Wallet"}
                      {connector.name.includes("WalletConnect") && "Scan with mobile wallet"}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 rounded-lg border border-blue-700">
              <p className="text-blue-300 text-sm">
                <strong>Note:</strong> For the best experience on X Layer, we recommend using OKX Wallet.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
