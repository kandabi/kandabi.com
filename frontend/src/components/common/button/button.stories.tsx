import { Button } from './button';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {
    args: {
        text: 'My Work',
    },
};
