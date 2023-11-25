"use client";

import { usePharmacies } from "@/app/contexts/pharmaciesContext";
import { Pharmacy } from "@/types";

interface Props {
  initialData: Pharmacy[];
  children: React.ReactNode;
}

const PharmaciesContextInitialDataProvider: React.FC<Props> = ({
  initialData,
  children,
}) => {
  const { set } = usePharmacies();

  set(initialData);

  return <>{children}</>;
};

export default PharmaciesContextInitialDataProvider;
