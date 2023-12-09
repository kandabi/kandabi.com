import { Input } from './Input';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Components/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputStory: Story = {
    args: {
        placeholder: 'Enter text here',
        value: '',
        name: 'name',
    },
};

export const TextAreaStory: Story = {
    args: {
        placeholder: 'Enter text here',
        as: 'textarea',
        name: 'name',
        value: '',
        rows: 4,
    },
};
