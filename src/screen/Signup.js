import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Signup() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.signup__container}>
          <Text style={styles.signup__container__text}>Sign Up</Text>
        </View>

        {/* Inputs */}
        <View style={styles.input__container}>
          <TextInput
            placeholderTextColor="#aaaaaa"
            placeholder="Username"
            style={styles.input__field}
          />

          <TextInput
            placeholderTextColor="#aaaaaa"
            placeholder="Email"
            style={styles.input__field}
          />

          <TextInput
            placeholderTextColor="#aaaaaa"
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input__field}
          />

          <TextInput
            placeholderTextColor="#aaaaaa"
            placeholder="Repeat Password"
            secureTextEntry={true}
            style={styles.input__field}
          />
        </View>

        {/* Button */}
        <View style={styles.button__container}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.button__text}>Sign up</Text>
          </TouchableOpacity>
        </View>

        {/* !Account */}
        <View style={styles.account__container}>
          <Text style={styles.account__container__text1}>
            You already have account?
          </Text>
          <TouchableOpacity>
            <Text style={styles.account__container__text2}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
    marginVertical: 100,
  },
  signup__container: {
    marginBottom: 20,
  },
  signup__container__text: {
    fontSize: 35,
    color: "#009496",
  },
  input__container: {
    marginBottom: 50,
  },
  input__field: {
    fontSize: 20,
    borderBottomWidth: 2,
    height: 60,
    borderBottomColor: "#009496",
  },
  button__container: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#009496",
    borderRadius: 10,
  },
  button__text: {
    fontSize: 30,
    color: "white",
    padding: 10,
    alignSelf: "center",
  },
  account__container: {
    flexDirection: "row",
    marginHorizontal: 10,
    fontSize: 25,
  },
  account__container__text2: {
    marginLeft: 10,
    color: "#009496",
    fontSize: 17,
  },
  account__container__text1: {
    fontSize: 17,
  },
});
