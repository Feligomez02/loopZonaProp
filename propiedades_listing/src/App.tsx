import { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import ListingCard from "./components/ListingCard";
import StatsPanel from "./components/StatsPanel";
import { fetchListings } from "./api";
import { barriosCba } from "./utils/barrios.ts"; 
import { extractTags } from "./utils/extractTags.ts";

interface Listing {
  title: string;
  url: string;
  price: number;
  currency: string;
  location: string;
  surface: string;
  barrio?: string;
}

function getBarrioFromLocation(location: string): string | null {
  const normalizedLoc = location.toLowerCase();
  for (const barrio of barriosCba) {
    if (normalizedLoc.includes(barrio.name.toLowerCase())) {
      return barrio.name;
    }
  }
  return "Otros";
}

function App() {
  const [listings, setListings] = useState<Listing[]>([]);
  const [filtered, setFiltered] = useState<Listing[]>([]);
  const [barrios, setBarrios] = useState<string[]>([]);
  const [filterText, setFilterText] = useState("");
  const [ activeTags, setActiveTags ] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchListings()
      .then((data) => {
        const enriched = data.map((item: Listing) => ({
          ...item,
          barrio: getBarrioFromLocation(item.location),
        }));

        const barrioSet = new Set(enriched.map((item: { barrio: any; }) => item.barrio));
        const barrioList = Array.from(barrioSet) as string[];

        setListings(enriched);
        setFiltered(enriched);
        setBarrios(barrioList.sort());
      })
      .catch(() => setError("Error al cargar las propiedades."))
      .finally(() => setLoading(false));
  }, []);

  const handleFilter = (barrio: string) => {
    setFilterText(barrio);
    if (!barrio.trim()) {
      setFiltered(listings);
      return;
    }

    

    const filteredData = listings.filter(
      (item) => item.barrio?.toLowerCase() === barrio.toLowerCase()
    );
    setFiltered(filteredData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-extrabold mb-6 text-indigo-700 text-center">
        Comparador de Propiedades por Barrio
      </h1>

      <FilterBar locations={barrios} onFilter={handleFilter} value={filterText} />

      {loading && <p className="text-center mt-6 text-gray-500">Cargando propiedades...</p>}
      {error && <p className="text-center mt-6 text-red-600">{error}</p>}

      {!loading && !error && (
        <>
          <StatsPanel listings={filtered} />

          {filtered.length === 0 ? (
            <p className="text-center mt-10 text-gray-600">
              No se encontraron propiedades para "{filterText}"
            </p>
          ) : (
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6">
              {filtered.map((item, i) => (
                <ListingCard key={i} listing={item} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
