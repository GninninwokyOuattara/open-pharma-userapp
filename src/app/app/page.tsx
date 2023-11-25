import AppPageContainer from "@/components/appPageContainer";
import { getPharmacies } from "@/queries/getPharmacies";
import PharmaciesContextInitialDataProvider from "@/components/pharmaciesContextInitialDataProvider";

export default async function Home() {
  const initialData = await getPharmacies();

  return (
    <main className="h-screen w-screen">
      <PharmaciesContextInitialDataProvider initialData={initialData}>
        <AppPageContainer />
      </PharmaciesContextInitialDataProvider>
    </main>
  );
}
