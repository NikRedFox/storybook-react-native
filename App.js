import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MenuHamburguer from './src/components/MenuHamburguer/index.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <MenuHamburguer />
      <Text >Teste de componente e storybook mobile</Text>
      <StatusBar style="auto" />
    </View>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
