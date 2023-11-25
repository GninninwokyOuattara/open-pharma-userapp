import { Pharmacy } from "@/types";
import axios from "axios";

export const getTrackingInformationsSummary = async (): Promise<any> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies-tracking-summary/`
  );

  return response.data;
};
