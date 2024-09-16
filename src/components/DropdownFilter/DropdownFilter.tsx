interface DropdownFilterProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const DropdownFilter = ({ id, label, options, selectedValue, onChange }: DropdownFilterProps) => {
  return (
    <div className="relative">
      <label
        id={`${id}-label`}  // Ensure the label has an id
        htmlFor={id}
        className="text-sm font-medium text-gray-700 hidden"
      >
        {label}
      </label>
      <select
        id={id}
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        className="bg-bgColor border border-textColor-300 md:text-base text-sm rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary p-2"
        aria-labelledby={`${id}-label`}  // Ensure the select element references the label's id
        data-testid={`${id}-filter`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
