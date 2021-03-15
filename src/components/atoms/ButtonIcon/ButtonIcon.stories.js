import React from 'react';
import { storiesOf } from '@storybook/react';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import iconRemove from 'assets/img/iconRemove';
storiesOf('atoms/ButtonIcon', module).add('Primary', () => <ButtonIcon icon={iconRemove} />);
