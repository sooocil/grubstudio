import { Code } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto mt-10 p-8 bg-white rounded-lg shadow">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Marketplace Page
        </h1>
        <p className="mb-6 text-gray-600">
          This is the marketplace page where you can explore and purchase
          products.
        </p>
        <Code className="w-6 h-6 text-gray-500" />
        <p className="text-sm text-gray-400">
          More features will be added soon!
        </p>
      </div>
    </div>
  );
};

export default page;
