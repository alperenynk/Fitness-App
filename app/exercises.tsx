import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Exercises() {
  return (
    <View style={styles.container}>
      <View style={styles.bodyParts}>
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Back</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/background-image.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Chest</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/background-image.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Biceps</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/background-image.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Triceps</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/background-image.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#620125",
  },

  bodyParts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "15%",
  },

  item: {
    width: "45%",
    marginBottom: "5%",
  },

  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },

  box: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
