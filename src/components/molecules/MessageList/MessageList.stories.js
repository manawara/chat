import React from 'react';
import { storiesOf } from '@storybook/react';
import MessageList from 'components/molecules/MessageList/MessageList';

storiesOf('molecules/MessageList', module).add('Primary', () => (
  <>
    <MessageList color="pink" />
    <MessageList color="blue" />
  </>
));
