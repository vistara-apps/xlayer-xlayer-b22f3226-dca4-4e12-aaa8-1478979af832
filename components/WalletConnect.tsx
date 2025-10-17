"use client";

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { WalletIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { xLayer } from "@/lib/wagmi";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();

  const handleConnect = () => {
    const connector = connectors[0];
    if (connector) {
      connect({ connector });
    }
  };

  const handleSwitchNetwork = () => {
    switchChain({ chainId: xLayer.id });
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
    <button
      onClick={handleConnect}
      className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 shadow-lg"
    >
      <WalletIcon className="w-5 h-5" />
      <span className="font-medium">Connect OKX Wallet</span>
    </button>
  );
}
