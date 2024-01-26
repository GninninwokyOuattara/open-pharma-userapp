import { Pharmacy, TrackingInformationResponse } from "@/types";
import axios from "axios";

export const getTrackingInformationsSummary =
  async (): Promise<TrackingInformationResponse> => {
    const staticData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies-tracking-summary/`,
      {
        next: {
          revalidate: 60 * 10,
        },
      }
    );

    const data = await staticData.json();

    return data;
  };
