import { Pharmacy } from "@/types";
import axios from "axios";

export const getPharmacies = async (): Promise<Pharmacy[]> => {
  // const response = await axios.get(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies/`
  // );
  console.log("Making request to API --- ");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies/`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  console.log("RESPONSE LENGTH --- ", data.length);

  return data;
};
