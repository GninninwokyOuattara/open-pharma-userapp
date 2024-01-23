import { Pharmacy, TrackingInformationResponse } from "@/types";
import axios from "axios";

export const getTrackingInformationsSummary =
  async (): Promise<TrackingInformationResponse> => {
    console.log("REQUEST MADE -----");
    const staticData = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies-tracking-summary/`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    const data = await staticData.json();
    console.log("REQUEST REPONSE --- ", data);

    // const response = await axios.get(
    //   `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies-tracking-summary/`
    // );

    return data;
  };
