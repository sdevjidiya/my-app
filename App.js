import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* image */}
      <Image
        style={styles1.stretch}
        source={require('./img/facebook-icon.png')}
      />
      <Text>This is my new app</Text>
      <StatusBar style="auto" />
      <Button
        title="Learn More"
        color="#841584"
      />
    </View>
  );
}

// first style
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// second style
const styles1 = StyleSheet.create({
  container: {
    padding: 10,
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
});



