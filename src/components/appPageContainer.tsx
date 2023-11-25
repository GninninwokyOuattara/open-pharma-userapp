"use client";

import { LeafletProvider } from "@/app/contexts/leafletContext";
import { usePharmacies } from "@/app/contexts/pharmaciesContext";
import {
  getPharmaciesWithDistanceToUser,
  sortPharmaciesByDistanceAsc,
} from "@/app/utils/pharmacies-processors";
import useUserLocation from "@/hooks/useUserLocation";
import { Pharmacy, PharmacyWithDistanceToUser } from "@/types";
import dynamic from "next/dynamic";
import React, { useMemo, useRef } from "react";
import Bottomsheet from "./bottomsheet";
import SidebarContent from "./sidebarContent";
import AppLoadingPage from "./appLoadingPage";

interface Props {
  pharmacies?: Pharmacy[];
}

const AppPageContainer: React.FC<Props> = () => {
  const { pharmacies } = usePharmacies();
  const locationErrorMessageSent = useRef(false);

  const LeafletMap = useMemo(
    () =>
      dynamic(() => import("@/components/leafletMap"), {
        loading: () => <AppLoadingPage />,
        ssr: false,
      }),
    []
  );

  const { location, error } = useUserLocation();

  if (error && !locationErrorMessageSent.current) {
    locationErrorMessageSent.current = true;
    alert("Impossible d'accéder à votre location.");
  }

  const processedPharmacies = useMemo(():
    | Pharmacy[]
    | PharmacyWithDistanceToUser[] => {
    if (location) {
      let processedDatas = getPharmaciesWithDistanceToUser(
        pharmacies,
        location
      );

      processedDatas = sortPharmaciesByDistanceAsc(processedDatas);
      return processedDatas;
    } else {
      return pharmacies;
    }
  }, [location, pharmacies]);

  return (
    <>
      <LeafletProvider>
        <div id="mainContainer" className="flex flex-column h-full">
          <aside className="hidden md:flex w-[40%] max-w-[500px] p-2 h-full">
            <SidebarContent pharmacies={processedPharmacies} />
          </aside>
          <div className=" flex-1 h-full md:p-2">
            <LeafletMap pharmacies={pharmacies} />
          </div>
        </div>
        <Bottomsheet pharmacies={processedPharmacies} />
      </LeafletProvider>
    </>
  );
};

export default AppPageContainer;
