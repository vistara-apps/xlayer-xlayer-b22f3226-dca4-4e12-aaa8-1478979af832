"use client";

import { useChainId, useBlockNumber } from "wagmi";
import { xLayer } from "@/lib/wagmi";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/solid";

export function NetworkStatus() {
  const chainId = useChainId();
  const { data: blockNumber } = useBlockNumber({ watch: true });
  const isCorrectNetwork = chainId === xLayer.id;

  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isCorrectNetwork ? (
            <CheckCircleIcon className="w-6 h-6 text-green-500" />
          ) : (
            <XCircleIcon className="w-6 h-6 text-red-500" />
          )}
          <div>
            <h3 className="text-white font-semibold">Network Status</h3>
            <p className="text-gray-400 text-sm">
              {isCorrectNetwork ? "Connected to X Layer" : "Wrong Network"}
            </p>
          </div>
        </div>
        {blockNumber && (
          <div className="text-right">
            <p className="text-gray-400 text-sm">Block</p>
            <p className="text-white font-mono font-semibold">
              {blockNumber.toString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
