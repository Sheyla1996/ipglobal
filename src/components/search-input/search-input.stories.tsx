import type { Meta, StoryObj } from '@storybook/react';
import SearchInput from './search-input';

const meta = {
    title: 'Components/Search Input',
    component: SearchInput,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};