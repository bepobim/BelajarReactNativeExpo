import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [title, setTitle] = useState("");

  return (
    <View style={styles.body}>
      <ScrollView>
        <Text>Test</Text>
        <Text>{title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text
            style={styles.buttonText}
            onPress={() => setTitle("Hello Dunia")}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: "100%",
  },
  button: {
    width: "fit-content",
    backgroundColor: "red",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "5px",
  },
  buttonText: {
    color: "white",
  },
});
