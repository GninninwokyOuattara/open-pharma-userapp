import { Pharmacy } from "@/types";
import axios from "axios";

export const getPharmacies = async (): Promise<Pharmacy[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies/`
  );

  return response.data;
};
