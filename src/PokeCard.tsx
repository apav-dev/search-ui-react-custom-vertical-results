import { CardProps } from "@yext/search-ui-react";
import Ce_pokemon from "./pokemon";
import { C_sprites } from "./pokemon";

type PokeCard = CardProps<Ce_pokemon> & {
  logo?: string;
};

const PokeCard = ({ result, logo }: PokeCard) => {
  const pokemon = result.rawData;
  const { frontDefault: mainImage } = pokemon.c_sprites as C_sprites;

  const formatStatName = (str?: string) => {
    if (!str) return;

    return str
      .replace(/-/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getTypeColor = (type: string) => {
    const typeColors: Record<string, string> = {
      normal: "bg-gray-500",
      fire: "bg-red-500",
      water: "bg-blue-500",
      electric: "bg-yellow-500",
      grass: "bg-green-500",
      ice: "bg-light-blue-500",
      fighting: "bg-orange-500",
      poison: "bg-purple-500",
      ground: "bg-brown-500",
      flying: "bg-teal-500",
      psychic: "bg-pink-500",
      bug: "bg-lime-500",
      rock: "bg-amber-500",
      ghost: "bg-indigo-500",
      dragon: "bg-cyan-500",
      dark: "bg-blue-gray-500",
      steel: "bg-gray-400",
      fairy: "bg-rose-500",
    };

    return typeColors[type.toLowerCase()] || "bg-gray-300";
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{pokemon.name}</h2>
        <span className="text-gray-500">
          <img className="h-4 w-4" src={logo} />
        </span>
      </div>
      <div className="flex justify-center">
        {mainImage && (
          <img
            className="h-32 w-32"
            src={mainImage.url}
            alt={mainImage.alternateText || pokemon.name}
          />
        )}
      </div>
      <div className="mt-4 space-x-2">
        {pokemon.c_types?.map((type) => (
          <span
            key={type.name}
            className={`px-2 py-1 ${getTypeColor(
              type.name || ""
            )} rounded-full text-gray-100`}
          >
            {formatStatName(type.name)}
          </span>
        ))}
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Stats</h3>
        <ul className="list-none">
          {pokemon.c_stats?.map((stat) => (
            <li key={stat.name} className="flex justify-between">
              <span>{formatStatName(stat.name)}</span>
              <span>{stat.baseStat}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PokeCard;
