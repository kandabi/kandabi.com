import type { Preview } from '@storybook/react';
import 'styles/globals.scss';
import { Color, colorConfig } from '../src/utils/color';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [
                {
                    name: 'dark',
                    value: colorConfig[Color.blue_500],
                },
            ],
        },
    },
};

export default preview;
