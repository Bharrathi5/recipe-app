import React from "react";

const Shimmer = () => {
  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-5 bg-gray-300 w-40 h-8 animate-pulse rounded"></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* Card 1 */}
        <div className="bg-gray-300 animate-pulse rounded-lg w-full h-64"></div>
        {/* Card 2 */}
        <div className="bg-gray-300 animate-pulse rounded-lg w-full h-64"></div>
        {/* Card 3 */}
        <div className="bg-gray-300 animate-pulse rounded-lg w-full h-64"></div>
        {/* Card 4 */}
        <div className="bg-gray-300 animate-pulse rounded-lg w-full h-64"></div>
        {/* Card 5 */}
        <div className="bg-gray-300 animate-pulse rounded-lg w-full h-64"></div>
        {/* Card 6 */}
        <div className="bg-gray-300 animate-pulse rounded-lg w-full h-64"></div>
      </div>
    </div>
  );
};

export default Shimmer;
