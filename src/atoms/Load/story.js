import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Load from './index';

storiesOf('atons/Load/', module).add('Normal', () => <Load />);
