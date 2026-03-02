import React from 'react';
import { View } from 'react-native';
import { MenuHamburguer } from './MenuHamburguer';

export default {
  title: 'Components/MenuHamburguer',
  component: MenuHamburguer,
};

export const Padrao = () => (
  <View style={{ padding: 20 }}>
    <MenuHamburguer />
  </View>
);