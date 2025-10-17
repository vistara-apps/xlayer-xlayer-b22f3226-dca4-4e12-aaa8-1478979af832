"use client";

import { useState } from "react";
import { TrophyIcon, SparklesIcon, StarIcon } from "@heroicons/react/24/solid";

interface NFT {
  id: number;
  name: string;
  type: "achievement" | "collectible";
  rarity: "common" | "rare" | "legendary";
  imageUrl: string;
  description: string;
}

const mockNFTs: NFT[] = [
  {
    id: 1,
    name: "Math Master",
    type: "achievement",
    rarity: "rare",
    imageUrl: "/nft-placeholder.png",
    description: "Completed 100 math problems",
  },
  {
    id: 2,
    name: "Reading Star",
    type: "achievement",
    rarity: "common",
    imageUrl: "/nft-placeholder.png",
    description: "Read 10 books",
  },
  {
    id: 3,
    name: "Golden Dragon Pet",
    type: "collectible",
    rarity: "legendary",
    imageUrl: "/nft-placeholder.png",
    description: "Rare companion pet",
  },
  {
    id: 4,
    name: "Science Explorer",
    type: "achievement",
    rarity: "rare",
    imageUrl: "/nft-placeholder.png",
    description: "Completed science module",
  },
];

export function NFTGallery() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "border-yellow-500 bg-yellow-500";
      case "rare":
        return "border-blue-500 bg-blue-500";
      default:
        return "border-gray-500 bg-gray-500";
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-yellow-900";
      case "rare":
        return "bg-blue-900";
      default:
        return "bg-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <TrophyIcon className="w-8 h-8 text-yellow-500" />
        <h2 className="text-3xl font-bold text-white">Trophy Room</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockNFTs.map((nft) => (
          <div
            key={nft.id}
            onClick={() => setSelectedNFT(nft)}
            className={`${getRarityBg(
              nft.rarity
            )} rounded-xl p-4 border-2 ${getRarityColor(
              nft.rarity
            )} cursor-pointer hover:scale-105 transition-transform`}
          >
            <div className="aspect-square bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              {nft.type === "achievement" ? (
                <StarIcon className="w-16 h-16 text-yellow-500" />
              ) : (
                <SparklesIcon className="w-16 h-16 text-blue-500" />
              )}
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">{nft.name}</h3>
            <div className="flex items-center gap-1">
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${getRarityColor(
                  nft.rarity
                )} bg-opacity-20 text-white`}
              >
                {nft.rarity}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedNFT && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedNFT(null)}
        >
          <div
            className="bg-gray-800 rounded-2xl p-6 max-w-md w-full border-2 border-blue-500"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-square bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              {selectedNFT.type === "achievement" ? (
                <StarIcon className="w-32 h-32 text-yellow-500" />
              ) : (
                <SparklesIcon className="w-32 h-32 text-blue-500" />
              )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {selectedNFT.name}
            </h3>
            <p className="text-gray-300 mb-4">{selectedNFT.description}</p>
            <div className="flex items-center justify-between">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${getRarityColor(
                  selectedNFT.rarity
                )} bg-opacity-20 text-white`}
              >
                {selectedNFT.rarity}
              </span>
              <span className="text-gray-400 text-sm">
                {selectedNFT.type === "achievement" ? "Achievement" : "Collectible"}
              </span>
            </div>
            <button
              onClick={() => setSelectedNFT(null)}
              className="w-full mt-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
