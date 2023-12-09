import { Line } from './Line';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Line',
    component: Line,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Line>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Span: Story = {
    args: {
        children: <span>Some span</span>,
    },
};

export const Div: Story = {
    args: {
        children: <div>Some div</div>,
    },
};

export const Controlled: Story = {
    args: {
        children: <div>Controlled component</div>,
        isOpen: true,
    },
};
