import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../src/ui/buttons/primaryButton';

storiesOf('Button', module).add('Button Primary', () => (
  <div>
    <Button name={'primary button'} />
    <br />
    <br />
    <Button disabled={true} name={'disabled button'}>
      This a button
    </Button>
  </div>
));
