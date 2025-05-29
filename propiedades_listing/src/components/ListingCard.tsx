import { MapPin, Ruler, DollarSign, ExternalLink } from "lucide-react";
import { extractTags } from "../utils/extractTags";

export interface Listing {
  title: string;
  location: string;
  surface: string;
  currency: string;
  price: number;
  url: string;
  barrio?: string;
}

interface ListingCardProps {
  listing: Listing;
  onTagClick: (tag: string) => void;
}

// Lista simple de stop words en español
const stopWords = new Set([
  "el", "la", "los", "las", "un", "una", "unos", "unas", "de", "del", "en", "y", "o",
  "a", "con", "por", "para", "al", "se", "que", "es", "esta", "este", "son", "como",
  "más", "su", "sus", "lo", "le", "les", "ha", "hay", "pero", "no", "sí", "si", "te",
  "tu", "tus", "mi", "mis", "nos", "vos", "vosotros", "ustedes", "él", "ella", "ellos",
  "ellas", "sobre", "tras", "entre", "sin", "ante", "bajo", "cabe", "contra"
]);

function filterStopWords(text: string, maxWords = 5): string {
    const words = text
      .toLowerCase()
      .replace(/[.,]/g, "")
      .split(/\s+/)
      .filter((w) => !stopWords.has(w));
  
    const capitalized = words.map((w) => w.charAt(0).toUpperCase() + w.slice(1));
    return capitalized.slice(0, maxWords).join(" ") + (capitalized.length > maxWords ? "..." : "");
  }
  
  export default function ListingCard({ listing, onTagClick }: ListingCardProps) {
    const shortTitle = filterStopWords(listing.title);
    const tags = extractTags(listing.title);
  
    return (
      <div className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
        <h2 className="text-lg font-bold text-indigo-700 mb-2">{shortTitle}</h2>
  
        <p className="text-sm text-gray-600 mb-1">
          <strong>Ubicación:</strong> {listing.location}
        </p>
  
        <p className="text-sm text-gray-600 mb-1">
          <strong>Superficie:</strong> {listing.surface}
        </p>
  
        <p className="text-base font-bold text-indigo-900 mb-3">
          {listing.currency} {listing.price.toLocaleString()}
        </p>
  
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag) => (
              <span
                key={tag}
                onClick={() => onTagClick(tag)}
                className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-1 rounded-full cursor-pointer hover:bg-indigo-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
  
        <a
          href={listing.url}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start px-4 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
        >
          Ver detalle
        </a>
      </div>
    );
  }