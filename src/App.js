import React, {useState} from 'react';
import {
  Text, 
  View, 
  SafeAreaView, 
  TouchableOpacity, 
  StyleSheet, 
}from 'react-native';

const App = () => {
const [numero, setNumero] = useState(0);

function handleNumero() {
  const novo_numero = Math.floor(Math.random() * 100000)
setNumero(novo_numero)
}

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.numero}> {numero}</Text>
      <TouchableOpacity onPress={handleNumero}   style= {style.botao}> 
        <Text> Gerar Numero </Text>
      </TouchableOpacity>  
    </SafeAreaView>
  );
};
    
const style = StyleSheet.create({
container: {

  backgroundColor: 'red',
  flex:1,
  justifyContent: `center`,
  alignItems: `center`,
},


numero: {
  fontSize: 38,
  color: '#FFFFFF',
  fontWeight:`bold`,
},

botao: {
  backgroundColor: `white`,
  width: `100%`,
  paddingHorizontal: 10,
  paddingVertical: 15,
  borderRadius: 5,
  justifyContent:`center`,
  alignItems:`center`,
  marginTop: 10,
  
},


});




export default App;
