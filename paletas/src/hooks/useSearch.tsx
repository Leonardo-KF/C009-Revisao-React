import { useContext } from "react";
import { SearchContext } from "../context/searchContext";

export function useSearch() {
    return useContext(SearchContext);
} 