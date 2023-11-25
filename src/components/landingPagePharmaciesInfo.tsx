"use client";

import { getTrackingInformationsSummary } from "@/queries/getTrackingInformations";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface Props {
  initialData: any;
}

const LandingPagePharmaciesInfo: React.FC<Props> = ({ initialData }) => {
  //   const { data } = useQuery({
  //     queryKey: ["pharmacies-tracking-summary"],
  //     queryFn: getTrackingInformationsSummary,
  //     initialData: initialData,
  //   });
  //   console.log(data);

  return (
    <div className="w-full my-20 flex flex-col gap-5">
      <div className="w-full flex flex-col items-center gap-3">
        <h2 className="text-lg md:text-3xl font-bold text-gray-700">
          Pharmacies de garde actuellement{" "}
        </h2>
        <h3 className="text-5xl text-green-500">
          {initialData?.open_pharmacies || 0}
        </h3>
      </div>
      <div className="w-full flex flex-col items-center gap-3">
        <h2 className="text-lg md:text-3xl font-bold text-gray-700">
          Nombre total de pharmacies trackées{" "}
        </h2>
        <h3 className="text-5xl ">{initialData?.active_pharmacies || 0}</h3>
      </div>
    </div>
  );
};

export default LandingPagePharmaciesInfo;
