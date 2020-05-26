import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default class Login extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.login_component}>
          <View style={styles.login__container}>
            <Text style={styles.login__container__text}>Log in</Text>
          </View>

          {/* Inputs */}
          <View style={styles.input__container}>
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
            <Text style={styles.forgot__password}>Forgot password?</Text>
          </View>

          {/* Button */}
          <View style={styles.button__container}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.button__text}>Log in</Text>
            </TouchableOpacity>
          </View>

          {/* !Account */}
          <View style={styles.account__container}>
            <Text style={styles.account__container__text1}>
              Don't have account?
            </Text>
            <Text style={styles.account__container__text2}>Sign up</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  login_component: {
    flexDirection: "column",
    marginVertical: 100,
    marginHorizontal: 50,
  },
  login__container: {
    marginBottom: 50,
  },
  login__container__text: {
    fontSize: 35,
    fontWeight: "600",
    color: "#009496",
  },
  input__container: {
    marginBottom: 50,
  },
  input__field: {
    borderBottomWidth: 2,
    borderBottomColor: "#009496",
    paddingBottom: 5,
    marginBottom: 15,
    fontSize: 20,
  },
  forgot__password: {
    alignSelf: "flex-end",
    color: "#000296",
  },
  button__container: {
    marginBottom: 50,
  },
  button: {
    backgroundColor: "#009496",
    alignItems: "center",
    borderRadius: 50,
  },
  button__text: {
    padding: 15,
    color: "white",
    fontSize: 20,
  },
  account__container: {
    flexDirection: "row",
  },
  account__container__text2: {
    flex: 2,
    alignSelf: "flex-end",
    color: "#009496",
  },
  account__container__text1: {
    flex: 8,
  },
});
