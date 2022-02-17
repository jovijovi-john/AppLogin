import React, { useEffect } from 'react';
import { 
    View, 
    Text, 
    BackHandler, 
    StyleSheet, 
    TouchableOpacity 
} from 'react-native';


import firebase from "../FirebaseConection";

import { 
    useNavigation,
    useRoute,
    StackActions
} from '@react-navigation/native';

export default function TelaInicial() {
    
    const route = useRoute();
    const navigation = useNavigation();
    
    useEffect(() => {
        BackHandler.addEventListener('backPress', () => true)
        return () => BackHandler.removeEventListener('backPress', () => true)
    }, [])

    async function logout() {
        await firebase.auth().signOut();
        alert("Usuario deslogado!");
        navigation.dispatch(StackActions.popToTop());
    }

    return (
        <View style={styles.container}>
            
            <View style={styles.viewBemVindo}>
                <Text style={styles.textBemVindo}>Bem vindo</Text>
                <Text style={{color: "#000", fontSize: 23, fontWeight: "bold"}}>{route.params?.email}</Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={styles.textButton}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 15,
        justifyContent: 'space-between'
    },

    viewBemVindo: {
        marginTop: 20
    },

    textBemVindo: {
        color: "#000",
        fontSize: 22
    },

    email: {

    },

    button: {
        marginTop: 20,
        marginBottom: 35,
        height: 70,
        borderRadius: 10,
        alignItems: "center",
        justifyContent:"center",
        backgroundColor: "#111"
    },
    
    textButton: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
})