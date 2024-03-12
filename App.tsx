import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";

const days = [1, 2, 3];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={days}
        renderItem={({ item, index }) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}> {item}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  box: {
    backgroundColor: "#f9ede3",
    width: 300,
    height: 300,
    borderWidth: 0.5,
    borderBlockColor: "#9b4521",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#9b4521",
    fontSize: 70,
  },
});
