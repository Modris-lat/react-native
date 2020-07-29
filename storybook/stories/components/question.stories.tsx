import React from 'react';
import {Alert} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Question} from '../../../src/components';

storiesOf('Question', module).add('default', () => <Question text={'text'}/>)