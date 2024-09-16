// DropdownFilter.stories.tsx
import { Meta, StoryObj } from '@storybook/react';
import DropdownFilter from './DropdownFilter';

export default {
  title: 'Components/DropdownFilter',
  component: DropdownFilter,
  tags: ['autodocs'],
  args: {
    onChange: { action: 'changed' }, // For simulating onChange action in Storybook
  },
};

// Default DropdownFilter Story
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
  },
};

// DropdownFilter with Language options
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
  },
};
