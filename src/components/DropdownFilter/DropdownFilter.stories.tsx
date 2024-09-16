import DropdownFilter from './DropdownFilter';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/DropdownFilter',
  component: DropdownFilter,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' }, // Simulate onChange action in Storybook
  },
};

/**
 * Default story for the DropdownFilter component.
 * 
 */
export const Default = {
  args: {
    id: 'repo-type',
    label: 'Type:',
    options: [
      { value: 'all', label: 'All' },
      { value: 'public', label: 'Public' },
      { value: 'private', label: 'Private' },
    ],
    selectedValue: 'all',
    onChange: action('onChange'), // Link the action to the onChange event
  },
};

/**
 * Story showcasing the DropdownFilter component with language options
 * 
 */
export const LanguageFilter = {
  args: {
    id: 'repo-language',
    label: 'Language:',
    options: [
      { value: 'all', label: 'All' },
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'TypeScript', label: 'TypeScript' },
      { value: 'Python', label: 'Python' },
    ],
    selectedValue: 'all',
    onChange: action('onChange'), // Link the action to the onChange event
  },
};

/**
 * Story demonstrating the DropdownFilter component with custom styles.
 *
 */
export const CustomStyles = {
  args: {
    id: 'custom-style-filter',
    label: 'Custom:',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
    selectedValue: 'option1',
    onChange: action('onChange'), // Link the action to the onChange event
  },
  parameters: {
    docs: {
      description: {
        story: 'This story demonstrates the DropdownFilter component with custom styles applied.',
      },
    },
  },
};
