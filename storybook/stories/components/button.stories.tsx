import React from 'react';
import {Alert} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import {Button} from '../../../src/components';

storiesOf('Button', module)
.add('default', () => <Button title={'press me'} onPress={() => Alert.alert('pressed')} />)
.add('outline', () => <Button title={'press me'} onPress={() => Alert.alert('pressed')} />)
.add('small', () => <Button title={'press me'} onPress={() => Alert.alert('pressed')} />)
.add('small outlined', () => <Button title={'press me'} onPress={() => Alert.alert('pressed')} />);