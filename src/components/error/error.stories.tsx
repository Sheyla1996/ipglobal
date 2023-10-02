import type { Meta, StoryObj } from '@storybook/react';
import Error from './error';

const meta = {
    title: 'Components/Error',
    component: Error,
    tags: ['autodocs'],
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};