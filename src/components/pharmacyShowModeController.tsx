import { usePharmacies } from '@/app/contexts/pharmaciesContext'

const PharmacyShowModeController = () => {

    const { showOpenOnly, setShowOpenOnly } = usePharmacies()

    return (
        <>
            <div className="flex gap-2">
                <button
                    className={`px-2 rounded-md shadow-md border-2 ${!showOpenOnly ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                    onClick={() => setShowOpenOnly(false)}>Toutes</button>
                <button
                    className={`px-2 rounded-md shadow-md border-2 ${showOpenOnly ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
                    onClick={() => setShowOpenOnly(true)}>Garde uniquement</button>
            </div>
        </>
    )
}

export default PharmacyShowModeController