import React, { useState, useEffect} from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput 
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import firebase from "../FirebaseConection";

export default function SignIn() {
    
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  
  useEffect(()=>{
    
    if (email.trim() !== "" && password.trim() !== "") {
      setDisabled(false)
    } else {
      setDisabled(true)
    };

  }, [email, password])

  async function login() {

    await firebase.auth().signInWithEmailAndPassword(email.trim(), password)
    
    .then((value)=>{
      alert("Bem vindo: " + value.user.email);
      navigation.navigate("TelaInicial", {email: email})
    })
    
    .catch((error) => {
      alert("Ops, algo deu errado!" + error);
      return;
    })
  }


  return (
    <View style={styles.container}>
      
      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput 
          style={styles.input}
          placeholder="Digite o seu email"
          placeholderTextColor={"#aaa"}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        
        <Text style={styles.text}>Senha</Text>
        <TextInput
          value={password}
          style={styles.input}
          placeholder="Digite a sua senha"
          placeholderTextColor={"#aaa"}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
      </View>
      
      <TouchableOpacity 
        style={[
          styles.button,
          (disabled === true 
            ? {backgroundColor: "#999"} 
            : {backgroundColor:"#111"})
        ]}
        disabled={disabled} 
        onPress={login}
      >

        <Text style={styles.textButton}>Logar</Text>
      
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },

  text: {
    fontSize: 16,
    color: "#000",
    fontWeight: "bold",
    marginVertical: 10
  },

  input: {
    height: 50,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    paddingLeft: 15,
    fontSize: 16,
    color: "#000"
  },
  
  button: {
    marginTop: 20,
    marginBottom: 35,
    height: 70,
    borderRadius: 10,
    alignItems: "center",
    justifyContent:"center"
  },

  textButton: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textTransform: "uppercase"
  }
})