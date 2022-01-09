import { createContext, useContext } from "react"
export type SearchText = {
    searchText: string | null,
    setSearchText: (c: string | null) => void
}
export const SearchContext = createContext<SearchText>({
    searchText: null,
    setSearchText: () => { },
})
export const useSearchContext = () => useContext(SearchContext)