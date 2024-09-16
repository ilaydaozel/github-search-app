interface DropdownFilterProps {
  id: string;
  label: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (value: string) => void;
}

/**
 * A component that renders a dropdown filter with a label and options.
 * 
 * This component displays a dropdown menu with the provided options. It also includes a hidden label for accessibility.
 * When the user selects an option, the `onChange` callback is invoked with the selected value.
 * 
 */
const DropdownFilter = ({ id, label, options, selectedValue, onChange }: DropdownFilterProps) => {
  return (
    <div className="relative">
      <label
        id={`${id}-label`}  // Ensures the label element has a unique ID for accessibility
        htmlFor={id}        // Associates the label with the dropdown
        className="text-sm font-medium text-gray-700 hidden"  // Hidden but accessible for screen readers
      >
        {label}
      </label>
      <select
        id={id}                              // Sets the ID for the dropdown
        value={selectedValue}                // Sets the currently selected value
        onChange={(e) => onChange(e.target.value)}  // Calls the onChange handler with the selected value
        className="bg-bgColor border border-textColor-300 md:text-base text-sm rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary p-2"  // Styles for the dropdown
        aria-labelledby={`${id}-label`}      // Associates the dropdown with the label for accessibility
        data-testid={`${id}-filter`}         // Provides a test ID for testing purposes
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {label} {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
