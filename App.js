import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput, ImageBackground } from "react-native";

const Counter = () => {
  const [valorMedio, setValorMedio] = useState(0);
  const [valorModificado, setValorModificado] = useState("");

  const incrementarUno = () => {
    setValorMedio(valorMedio + 1);
  };

  const decrementarUno = () => {
    setValorMedio(valorMedio - 1);
  };

  const sumarValor = () => {
    if (valorModificado !== "") {
      const newValue = parseInt(valorModificado);
      if (!isNaN(newValue)) {
        setValorMedio(valorMedio + newValue);
      }
    }
  };

  const restarValor = () => {
    if (valorModificado !== "") {
      const newValue = parseInt(valorModificado);
      if (!isNaN(newValue)) {
        setValorMedio(valorMedio - newValue);
      }
    }
  };

  return (
    <ImageBackground source={{ uri: "https://img.freepik.com/vector-gratis/fondo-dia-mundial-nino-acuarela_23-2149716451.jpg" }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <Text style={styles.counter}>{valorMedio}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={incrementarUno}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={decrementarUno}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Modificar valor medio:</Text>
          <TextInput
            style={styles.input}
            value={valorModificado}
            onChangeText={setValorModificado}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.operationButton} onPress={sumarValor}>
            <Text style={styles.operationButtonText}>Sumar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.operationButton} onPress={restarValor}>
            <Text style={styles.operationButtonText}>Restar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Agrega una transparencia al fondo
  },
  counterContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  button: {
    backgroundColor: "#ffcc00",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#fff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
    fontSize: 16,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "blue",
    padding: 10,
    marginLeft: 15,
    borderRadius: 15,
    width: 80,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  operationButton: {
    backgroundColor: "red",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  operationButtonText: {
    fontSize: 25,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Counter;