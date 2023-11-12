
import AppPageContainer from "@/components/appPageContainer";
import { getPharmacies } from "@/queries/getPharmacies";


export default async function Home() {
    const initialData = await getPharmacies()

    return (
        <main
            className="h-screen w-screen"
        >
            <AppPageContainer pharmacies={initialData} />
        </main>
    )
}
