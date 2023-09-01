import type { Preview } from '@storybook/react';
import 'pages/globals.scss';
import { Color, colorConfig } from '../src/utils/colors';

const preview: Preview = {
    parameters: {
        backgrounds: {
            default: 'dark',
            values: [{ name: 'dark', value: colorConfig[Color.blue_500] }],
        },
    },
};

export default preview;
