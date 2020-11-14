import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";

import * as GenerateRandomCode from "./src/utils/generateRadomCode";

import passeioImage from "./src/images/passeio.png";

export default function App() {
  const [code, setCode] = useState("");

  const generationCode = () => {
    setCode(GenerateRandomCode.TextNumCode(4, 6));
  };

  const salveCode = () => {
    Alert.alert(
      "SALVO COM SUCESSO",
      "O código foi salvo com sucesso!!!",
      [{ text: "OK", onPress: () => {} }],
      { cancelable: false }
    );
  };

  const createButtonAlertSaveCode = () =>
    Alert.alert(
      "SALVAR CÓDIGO",
      "Tem certeza que deseja salvar esse código?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Salvar", onPress: () => salveCode() },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={passeioImage} />
      <TextInput style={styles.textInput}>{code.toLocaleUpperCase()}</TextInput>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={generationCode}>
          <Text style={styles.textButton}>
            {"Gerar código".toLocaleUpperCase()}
          </Text>
        </TouchableOpacity>
        {code !== "" ? (
          <TouchableOpacity
            style={styles.button}
            onPress={createButtonAlertSaveCode}
          >
            <Text style={styles.textButton}>
              {"Salvar código".toLocaleUpperCase()}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 350,
    height: 150,
  },

  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
    textAlign: "center",
    alignSelf: "stretch",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#9C1919",
    borderRadius: 8,
    alignItems: "center",
    padding: 10,
    margin: 10,
  },

  textButton: {
    color: "#fff",
  },
});
