import type { Meta, StoryObj } from '@storybook/react';
import FilmCard from './film-card';
import { withRouter } from 'storybook-addon-react-router-v6';

const meta = {
    title: 'Components/FilmCard',
    component: FilmCard,
    tags: ['autodocs'],
    decorators: [withRouter],
} satisfies Meta<typeof FilmCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        movie: {
            title: 'Casablanca',
            poster_path: '/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
        }
    },
};