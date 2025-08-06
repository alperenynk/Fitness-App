import ExerciseModal from "@/components/ExerciseModal";
import { Image } from "expo-image";
import { useEffect, useState } from "react";
import {
  Animated,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Exercises() {
  const [modalVisible, setModalVisible] = useState(false);

  const motivationalQuotes = [
    "🏋️‍♂️ Push yourself, because no one else is going to do it for you.",
    "🔥 No pain, no gain!",
    "🧠 The body achieves what the mind believes.",
    "💪 You don’t have to be extreme, just consistent.",
    "⚡️ Train insane or remain the same.",
    "🎯 Strive for progress, not perfection.",
    "😤 Sweat is just fat crying.",
  ];

  const [quoteIndex, setQuoteIndex] = useState(0);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    const interval = setInterval(() => {
      fadeAnim.setValue(0);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();

      setQuoteIndex((prevIndex) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * motivationalQuotes.length);
        } while (nextIndex === prevIndex);
        return nextIndex;
      });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.quoteBox}>
          <Animated.Text style={[styles.quoteText, { opacity: fadeAnim }]}>
            {motivationalQuotes[quoteIndex]}
          </Animated.Text>
        </View>
        <View style={styles.bodyParts}>
          {/* Item Start */}
          <View style={styles.item}>
            <Pressable>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/back.jpg")}
                  contentFit="cover"
                ></Image>
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Back</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable onPress={() => setModalVisible(true)}>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/chest.png")}
                  contentFit="cover"
                ></Image>
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Chest</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable onPress={() => setModalVisible(true)}>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/biceps.jpg")}
                  contentFit="cover"
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Biceps</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/triceps.png")}
                  contentFit="cover"
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Triceps</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/shoulders.png")}
                  contentFit="cover"
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Shoulders</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/abs.png")}
                  contentFit="cover"
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Abs</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/quads.png")}
                  contentFit="cover"
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Quads</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}

          {/* Item Start */}
          <View style={styles.item}>
            <Pressable>
              <View style={styles.box}>
                <Image
                  style={styles.image}
                  source={require("@/assets/images/calves.jpg")}
                  contentFit="cover"
                />
                <View style={styles.labelContainer}>
                  <Text style={styles.text}>Calves</Text>
                </View>
              </View>
            </Pressable>
          </View>
          {/* Item End */}
        </View>
      </ScrollView>
      {/* Modal */}
      <ExerciseModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  quoteBox: {
    width: "90%",
    height: 220,
    backgroundColor: "#001F54",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "15%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  quoteText: {
    color: "#fff",
    fontSize: 20,
    fontStyle: "italic",
    textAlign: "center",
    lineHeight: 24,
    fontWeight: "bold",
  },

  bodyParts: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginTop: "10%",
    paddingBottom: 20,
  },

  item: {
    width: "45%",
    marginBottom: "5%",
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
  },

  labelContainer: {
    position: "absolute",
    alignItems: "center",
    width: "100%",
    bottom: "3.5%",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 8,
    textAlign: "center",
  },
});
