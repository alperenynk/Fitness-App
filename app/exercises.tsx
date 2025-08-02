import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Exercises() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.randomQuote}>

      </View>
      <View style={styles.bodyParts}>
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Back</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/back.jpg")}
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
              source={require("@/assets/images/chest.png")}
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
              source={require("@/assets/images/biceps.jpg")}
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
              source={require("@/assets/images/triceps.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Shoulders</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/shoulders.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Abs</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/abs.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Quads</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/quads.png")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
        {/* Item Start */}
        <View style={styles.item}>
          <Text style={styles.text}>Calves</Text>
          <View style={styles.box}>
            <Image
              style={styles.image}
              source={require("@/assets/images/calves.jpg")}
            ></Image>
          </View>
        </View>
        {/* Item End */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#620125",
  },

  randomQuote: {

  },

  bodyParts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "15%",
    paddingBottom: 20,
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
