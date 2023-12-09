import { NavbarItem } from './NavbarItem';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/NavbarItem',
    component: NavbarItem,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NavbarItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Navbar Item',
    },
};
