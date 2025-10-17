"use client";

import { useState } from "react";
import { UserCircleIcon, PlusIcon } from "@heroicons/react/24/outline";
import { AcademicCapIcon, TrophyIcon } from "@heroicons/react/24/solid";

interface Child {
  id: number;
  name: string;
  age: number;
  progress: number;
  nftCount: number;
  lessonsCompleted: number;
}

const mockChildren: Child[] = [
  {
    id: 1,
    name: "Emma",
    age: 7,
    progress: 65,
    nftCount: 12,
    lessonsCompleted: 45,
  },
  {
    id: 2,
    name: "Liam",
    age: 9,
    progress: 82,
    nftCount: 24,
    lessonsCompleted: 78,
  },
];

export function ChildProfile() {
  const [children] = useState<Child[]>(mockChildren);
  const [selectedChild, setSelectedChild] = useState<Child | null>(children[0]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Child Profiles</h2>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2">
          <PlusIcon className="w-5 h-5" />
          <span className="font-medium">Add Child</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {children.map((child) => (
          <div
            key={child.id}
            onClick={() => setSelectedChild(child)}
            className={`bg-gray-800 rounded-xl p-6 border-2 cursor-pointer transition-all ${
              selectedChild?.id === child.id
                ? "border-blue-500"
                : "border-gray-700 hover:border-gray-600"
            }`}
          >
            <div className="flex items-center gap-4 mb-4">
              <UserCircleIcon className="w-16 h-16 text-blue-500" />
              <div>
                <h3 className="text-xl font-bold text-white">{child.name}</h3>
                <p className="text-gray-400 text-sm">{child.age} years old</p>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Overall Progress</span>
                  <span className="text-blue-500 font-medium">{child.progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full transition-all"
                    style={{ width: `${child.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <TrophyIcon className="w-5 h-5 text-yellow-500" />
                  <span className="text-white font-medium">{child.nftCount}</span>
                  <span className="text-gray-400 text-sm">NFTs</span>
                </div>
                <div className="flex items-center gap-2">
                  <AcademicCapIcon className="w-5 h-5 text-green-500" />
                  <span className="text-white font-medium">
                    {child.lessonsCompleted}
                  </span>
                  <span className="text-gray-400 text-sm">Lessons</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedChild && (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6">
            {selectedChild.name}&apos;s Learning Journey
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <AcademicCapIcon className="w-6 h-6 text-green-500" />
                <h4 className="text-white font-semibold">Lessons</h4>
              </div>
              <p className="text-3xl font-bold text-green-500">
                {selectedChild.lessonsCompleted}
              </p>
              <p className="text-gray-400 text-sm">Completed</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <TrophyIcon className="w-6 h-6 text-yellow-500" />
                <h4 className="text-white font-semibold">NFT Rewards</h4>
              </div>
              <p className="text-3xl font-bold text-yellow-500">
                {selectedChild.nftCount}
              </p>
              <p className="text-gray-400 text-sm">Collected</p>
            </div>

            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-2">
                <UserCircleIcon className="w-6 h-6 text-blue-500" />
                <h4 className="text-white font-semibold">Progress</h4>
              </div>
              <p className="text-3xl font-bold text-blue-500">
                {selectedChild.progress}%
              </p>
              <p className="text-gray-400 text-sm">Overall</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
