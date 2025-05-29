interface FilterBarProps {
    locations: string[];
    onFilter: (location: string) => void;
    value: string;
  }
  
  export default function FilterBar({ locations, onFilter, value }: FilterBarProps) {
    return (
      <div className="mb-4 flex justify-center">
        <select
          className="border rounded-md p-2 w-64"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        >
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>
    );
  }