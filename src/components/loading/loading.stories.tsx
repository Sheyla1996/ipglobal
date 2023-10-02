import type { Meta, StoryObj } from '@storybook/react';
import Loading from './loading';

const meta = {
    title: 'Components/Loading',
    component: Loading,
    tags: ['autodocs'],
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};