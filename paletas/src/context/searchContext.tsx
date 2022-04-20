import React, {createContext, useState} from "react";

type PropsSearchContext = {
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

const DefaultValue = {
    search: "",
    setSearch: () => {}
}

export const SearchContext = createContext<PropsSearchContext>(DefaultValue);


export const SearchContextProvider: React.FC = ({children}) => {
    const [search, setSearch] = useState<string>("");
    return (
        <SearchContext.Provider value={{search, setSearch}}>
            {children}
        </SearchContext.Provider>
    );
}