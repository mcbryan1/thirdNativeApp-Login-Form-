import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { connect } from "react-redux";

class Login extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <ScrollView>
        <View style={styles.login_component}>
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
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("PetList");
              }}
            >
              <Text style={styles.button__text}>Log in</Text>
            </TouchableOpacity>
          </View>

          {/* !Account */}
          <View style={styles.account__container}>
            <Text style={styles.account__container__text1}>
              Don't have account?
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text style={styles.account__container__text2}>Sign up</Text>
            </TouchableOpacity>
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
    marginHorizontal: 30,
  },
  login__container: {
    marginBottom: 50,
  },
  login__container__text: {
    fontSize: 35,
    fontWeight: "600",
    color: "#205878",
  },
  input__container: {
    marginBottom: 50,
  },
  input__field: {
    borderBottomWidth: 2,
    borderBottomColor: "#205878",
    paddingBottom: 5,
    marginBottom: 35,
    fontSize: 20,
  },
  forgot__password: {
    alignSelf: "flex-end",
    color: "#000296",
  },
  button__container: {
    marginBottom: 80,
  },
  button: {
    backgroundColor: "#205878",
    alignItems: "center",
    borderRadius: 5,
  },
  button__text: {
    padding: 10,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  account__container: {
    flexDirection: "row",
  },
  account__container__text2: {
    flex: 2,
    alignSelf: "flex-end",
    color: "#205878",
    fontWeight: "bold",
  },
  account__container__text1: {
    flex: 8,
  },
});

export default connect({}, {})(Login);
