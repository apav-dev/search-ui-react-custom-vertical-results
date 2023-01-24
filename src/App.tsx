import {
  provideHeadless,
  SearchHeadlessProvider,
  SandboxEndpoints
} from "@yext/search-headless-react";
import {
  SearchBar,
  StandardCard,
  VerticalResults,
} from "@yext/search-ui-react";

const searcher = provideHeadless({
  apiKey: "55511319ffb8213b10c200d281668382",
  experienceKey: "pokemon-search",
  verticalKey: "pokémon",
  locale: "en",
  endpoints: SandboxEndpoints
});

function App() {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="flex justify-center px-4 py-6">
        <div className="w-full max-w-5xl">
          <SearchBar />
          {/* <VerticalResults CardComponent={StandardCard} /> */}
          {/* Replacing VerticalResults from Search UI React with my own component */}
          
        </div>
      </div>
    </SearchHeadlessProvider>
  );
}

export default App;
