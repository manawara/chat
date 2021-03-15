import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from 'components/atoms/Button/Button';

storiesOf('atoms/Button', module)
  .add('Primary', () => <Button>send</Button>)
  .add('Secondary', () => (
    <Button secondary color="black">
      send
    </Button>
  ));
