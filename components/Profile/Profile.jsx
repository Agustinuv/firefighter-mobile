import React from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

import { useNavigation } from '@react-navigation/native';

export default function Profile() {

    const navigation = useNavigation();

    return (
    <View style={styles.pageContainer}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('./../../assets/profile.jpg')} />   
        </View>
        
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Mi perfil</Text>
        </View>

        <View style={styles.infoContainer}>
            <View style={styles.row}>
                <Text style={styles.label}>Nombre</Text>
                <Text style={styles.value}>Juan Perez</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Edad</Text>
                <Text style={styles.value}>30</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Puesto</Text>
                <Text style={styles.value}>Bombero</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Correo</Text>
                <Text style={styles.value}>correo@gmail.com</Text>
            </View>
        </View>

        <View style={styles.buttonContainer}>
            <View style={styles.row}>
                <Button title="Cerrar Sesión" onPress={() => navigation.navigate('Login')} />
                <Button title="Editar Perfil" />
            </View>
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
    imageContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        margin: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        fontSize: 16,
    },


});
