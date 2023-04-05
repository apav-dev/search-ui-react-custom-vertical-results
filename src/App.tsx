import {
  provideHeadless,
  SearchHeadlessProvider,
  SandboxEndpoints,
} from "@yext/search-headless-react";
import { SearchBar, VerticalResults } from "@yext/search-ui-react";
import PokeCard from "./PokeCard";
import Ce_pokemon from "./pokemon";

const searcher = provideHeadless({
  apiKey: "55511319ffb8213b10c200d281668382",
  experienceKey: "pokemon-search",
  verticalKey: "pokémon",
  locale: "en",
  endpoints: SandboxEndpoints,
});

function App() {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="flex justify-center px-4 py-6">
        <div className="w-full max-w-5xl">
          <SearchBar />
          <VerticalResults<Ce_pokemon>
            CardComponent={(verticalResult) => (
              <PokeCard
                result={verticalResult.result}
                logo={
                  "https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
                }
              />
            )}
            customCssClasses={{
              verticalResultsContainer:
                "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3",
            }}
          />
        </div>
      </div>
    </SearchHeadlessProvider>
  );
}

export default App;
