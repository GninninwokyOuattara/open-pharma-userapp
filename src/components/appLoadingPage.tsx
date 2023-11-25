import React from "react";

const appLoadingPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center text-5xl text-bold gap-4">
      <h1 className="animate-pulse">
        Open<span className="text-green-500">Pharma</span>
      </h1>
      <p className="text-base text-gray-500">
        Veuillez patienter un instant...
      </p>
      {/* <Loader2 className="animate-spin text-orange-500" /> */}
    </div>
  );
};

export default appLoadingPage;
