
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('./assets/hydrant.jpg')} />
        <Text style={styles.headerText}>App Bomberos</Text>
      </View>
      <View style={styles.loginContainer}>
        <TextInput style={styles.input} placeholder="Usuario" />
        <TextInput style={styles.input} placeholder="Contraseña" />
        <Button title="Iniciar Sesión" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
  },
  
});
