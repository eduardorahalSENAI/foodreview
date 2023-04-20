import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useContext } from 'react'
import { DataContext, Fornecedor } from '../context/dataContext'

const Home = () => {
    const actualState = useContext(DataContext)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Text style={styles.text}>{actualState.state.counter}</Text>
            <Button 
                title="Aumentar"  
                onPress={() => actualState.dispatch({type:"aumentar", payload:10})}
            />
            <Button 
                title="Diminuir"  
                onPress={() => actualState.dispatch({type:"diminuir", payload:10})}
            />
            <Button 
                title="Zerar"  
                onPress={() => actualState.dispatch({type:"zerar"})}
            />
            
            { actualState.state.showMessage ? <Text>MENSAGEM SECRETA</Text> : null }

            <Button
                title="Mostrar Mensagem Secreta"
                onPress={() => actualState.dispatch({type:"mostrar"})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30
    }
})

export default () => {
    return (
      <Fornecedor>
        <Home />
      </Fornecedor>
    )
  }