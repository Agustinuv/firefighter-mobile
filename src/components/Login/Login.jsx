import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function Login({setIsLogged}) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setShowError] = useState(false);

    const navigation = useNavigation();

    const refUsername = useRef();
    const refPassword = useRef();

    const handleLogin = () => {
        if (username === "Admin" && password === "Admin") {
            setIsLogged(true);
        } else {
            setShowError(true);
        }
    }

    const errorMessage = () => {
        if (showError) {
            return (
                <Text style={styles.error}>Usuario o contraseña incorrectos</Text>
            );
        }
    }

    return (
    <View style={styles.pageContainer}>
      <View style={styles.headerContainer}>
        <Image style={styles.logo} source={require('./../../../assets/hydrant.jpg')} />
        <Text style={styles.headerText}>App Bomberos</Text>
      </View>
      <View style={styles.loginContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Usuario" 
          onChangeText={setUsername} 
          ref={refUsername}
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <TextInput 
          style={styles.input} 
          placeholder="Contraseña" 
          onChangeText={setPassword} 
          ref={refPassword}
          onSubmitEditing={handleLogin}
        />
        {errorMessage()}
        <Button title="Iniciar Sesión" onPress={handleLogin} />
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
    error: {
      color: 'red',
    },
  
  });