import { Result, useSearchState } from "@yext/search-headless-react";
import Ce_pokemon from "./pokemon";

const VerticalResults = () => {
    const results = useSearchState(state => state.vertical.results) as unknown as Result<Ce_pokemon>[];
    
    return (
        {results ? (<></>) : (<></>)}
    )
}

export default VerticalResults;