import { Pharmacy } from "@/types";
import axios from "axios";

export const getPharmacies = async (): Promise<Pharmacy[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies/`,
    { next: { revalidate: 60 * 10 } }
  );
  const data = await response.json();

  return data;
};
