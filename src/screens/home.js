import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { AppLoading } from "expo";
import { useFonts, Courgette_400Regular } from "@expo-google-fonts/courgette";
import PetRegister from "./petRegister";
import ProfileRegister from "./profileRegister";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function Home({ navigation }) {
  let [fontsLoaded] = useFonts({
    Courgette_400Regular,
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    button: {
      height: 50,
      width: "60%",
      alignSelf: "center",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
      borderRadius: 2,
    },
    textButton: {
      alignContent: "center",
      alignSelf: "center",
      fontSize: 12,
      color: "#434343",
    },
    viewWelcome: {
      alignItems: "center",
      textAlignVertical: "center",
      textAlign: "center",
      marginLeft: 70,
      marginRight: 70,
      marginBottom: 48,
    },
    viewOla: {
      alignItems: "center",
      textAlignVertical: "center",
      textAlign: "center",
      marginTop: 56,
      marginBottom: 52,
    },
    textOla: {
      fontFamily: "Courgette_400Regular",
      fontSize: 72,
      color: "#ffd358",
    },
    textWelcome: {
      fontSize: 16,
      color: "#757575",
    },
    clickButtons: {
      marginBottom: 44,
    },
    logo: {
      width: 122,
      height: 44,
      alignSelf: "center",
      marginTop: 68,
    },
    loginLink: {
      alignSelf: "center",
      fontSize: 16,
      color: "#88c9bf",
    },
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewOla}>
        <Text style={styles.textOla}>Olá!</Text>
      </View>
      <View style={styles.viewWelcome}>
        <Text style={styles.textWelcome}>Bem-vindo ao Meau!</Text>
        <Text style={{ textAlign: "center", fontSize: 16, color: "#757575" }}>
          Aqui você pode adotar, doar e ajudar cães e gatos com facilidade.
        </Text>
        <Text style={styles.textWelcome}>Qual o seu interesse?</Text>
      </View>
      <View style={styles.clickButtons}>
        <TouchableOpacity>
          <View style={styles.button} backgroundColor="#ffd358">
            <Text style={styles.textButton}>ADOTAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button} backgroundColor="#ffd358">
            <Text style={styles.textButton}>AJUDAR</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(PetRegister.name);
          }}
        >
          <View style={styles.button} backgroundColor="#ffd358">
            <Text style={styles.textButton}>CADASTRAR ANIMAL</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.loginLink}>login</Text>
      <Image
        style={styles.logo}
        source={require("../../assets/logo/meau_logo.png")}
      />
    </View>
  );
}
