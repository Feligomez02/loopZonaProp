interface Listing {
  price: number;
}

interface StatsPanelProps {
  listings: Listing[];
}

export default function StatsPanel({ listings }: StatsPanelProps) {
    const avgPrice = Math.round(listings.reduce((acc, l) => acc + l.price, 0) / listings.length || 1);
    return (
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h4 className="font-bold">Estadísticas</h4>
        <p>Propiedades: {listings.length}</p>
        <p>Precio promedio: ${avgPrice.toLocaleString()}</p>
      </div>
    );
  }
  