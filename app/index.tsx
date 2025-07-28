import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const PlaceHolderImage = require("@/assets/images/welcome.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image source={PlaceHolderImage} style={styles.image} />
      <View style={styles.bottomContainer}>
        <Text style={styles.welcomeText}>
          Best
          <Text style={styles.highlight}> Workouts</Text>
          {"\n"}For You
        </Text>
        <Link href="/exercises" style={styles.welcomeButton}>
          Get Started
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  bottomContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    bottom: "15%",
  },

  welcomeText: {
    color: "#fff",
    fontSize: 30,
    fontWeight: 800,
    textAlign: "center",
    paddingBottom: "3%",
  },

  highlight: {
    color: "#E51F50",
  },

  welcomeButton: {
    color: "#fff",
    fontSize: 20,
    fontWeight: 800,
    backgroundColor: "#E51F50",
    paddingHorizontal: 70,
    paddingVertical: 10,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "#fff",
  },
});
