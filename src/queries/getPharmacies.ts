import axios from "axios";

export const getPharmacies = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/pharmacies/`
  );

  console.log("pharmacies", response.data);
  return response.data;
};
