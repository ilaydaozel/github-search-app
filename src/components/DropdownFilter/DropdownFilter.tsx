interface DropdownFilterProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const DropdownFilter = ({ id, label, options, selectedValue, onChange }: DropdownFilterProps) => {
  return (
      <select
        id={id}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="bg-bgColor border border-textColor-300 md:text-base text-sm rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:borderprimary p-2"
        data-testid={`${id}-filter`}
      >        
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {label} {option.label}
          </option>
        ))}
      </select>
  );
};

export default DropdownFilter;
