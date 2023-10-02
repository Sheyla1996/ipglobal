import type { Meta, StoryObj } from '@storybook/react';
import NavBar from './navbar';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
    title: 'Components/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};