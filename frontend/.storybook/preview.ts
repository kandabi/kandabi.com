import type { Preview } from '@storybook/react';
import { Color, colorConfig } from '../src/utils/color';

import 'styles/globals.scss';

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
