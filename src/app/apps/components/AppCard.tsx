import { AppType } from '@/types/apps.type';
import Image from 'next/image';
import React from 'react';

interface AppProps{
    app: AppType;
}

const AppCard = ({app}: AppProps) => {
  return (
    <div>
    <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm hover:shadow-lg transition-all duration-300">
      
      {/* App Info */}
      <div className="flex gap-4">
        {/* App Image */}
        <Image
          src={app.image}
          alt={app.title}
          width={300}
          height={300}
          className="w-20 h-20 rounded-2xl object-cover shrink-0"
        />

        {/* Title & Company */}
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold text-gray-900 truncate">
            {app.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {app.companyName}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm font-semibold">
              {app.ratingAvg}
            </span>

            <span className="text-yellow-500">★</span>

            <span className="text-xs text-gray-400">
              ({app.reviews})
            </span>
          </div>
        </div>
      </div>

      {/* App Stats */}
      <div className="grid grid-cols-3 gap-2 mt-5 text-center">
        <div>
          <p className="text-sm font-semibold text-gray-800">
            {app.downloads}
          </p>
          <p className="text-xs text-gray-400">
            Downloads
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800">
            {app.size} MB
          </p>
          <p className="text-xs text-gray-400">
            Size
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-800">
            4.5
          </p>
          <p className="text-xs text-gray-400">
            Rating
          </p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl transition">
        Install
      </button>
    </div>
    </div>
  );
};


export default AppCard;