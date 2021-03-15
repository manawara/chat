import React from 'react';
import { storiesOf } from '@storybook/react';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

storiesOf('atoms/Paragraph', module)
  .add('Primary', () => <Paragraph color="red">tekst</Paragraph>)
  .add('Secondary', () => (
    <Paragraph small color="gray">
      tekst
    </Paragraph>
  ));
