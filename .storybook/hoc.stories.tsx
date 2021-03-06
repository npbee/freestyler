import {createElement as h} from 'react';
import {storiesOf} from '@storybook/react';
const {action} = require('@storybook/addon-actions');
const {linkTo} = require('@storybook/addon-links');
import hoc from '../src/react/hoc';

const withOrangeBorder = hoc({
    border: '1px solid orange'
});

const DivWithRedBorder = withOrangeBorder('div');

storiesOf('HOC', module)
  .add('Basic', () => <DivWithRedBorder>Hello world</DivWithRedBorder>)
