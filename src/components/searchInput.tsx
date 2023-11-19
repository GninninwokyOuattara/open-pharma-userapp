import { usePharmacies } from "@/app/contexts/pharmaciesContext"


interface Props {
    className?: string
}
const SearchInput: React.FC<Props> = ({ className }) => {

    const { setSearch } = usePharmacies()

    return (
        <input
            type="text"
            className={`w-full  rounded-md p-2 outline-none ${className}`}
            placeholder="Search..."
            onChange={(e) => {
                setSearch(e.target.value)
            }}
        />
    )
}

export default SearchInput