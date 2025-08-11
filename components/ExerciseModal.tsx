import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Image as ExpoImage } from "expo-image";
import { Modal, ScrollView, StyleSheet, View } from "react-native";

type ExerciseModalProps = {
  visible: boolean;
  onClose: () => void;
  group: string | null;
};

export default function ExerciseModal({
  visible,
  onClose,
  group,
}: ExerciseModalProps) {
  const gifMap: Record<string, any[]> = {
    back: [
      require("@/assets/gifs/back1.gif"),
      require("@/assets/gifs/back2.gif"),
      require("@/assets/gifs/back3.gif"),
      require("@/assets/gifs/back4.gif"),
      require("@/assets/gifs/back5.gif"),
      require("@/assets/gifs/back6.gif"),
    ],

    chest: [
      require("@/assets/gifs/chest1.gif"),
      require("@/assets/gifs/chest2.gif"),
      require("@/assets/gifs/chest3.gif"),
      require("@/assets/gifs/chest4.gif"),
      require("@/assets/gifs/chest5.gif"),
      require("@/assets/gifs/chest6.gif"),
    ],

    biceps: [
      require("@/assets/gifs/biceps1.gif"),
      require("@/assets/gifs/biceps2.gif"),
      require("@/assets/gifs/biceps3.gif"),
      require("@/assets/gifs/biceps4.gif"),
      require("@/assets/gifs/biceps5.gif"),
      require("@/assets/gifs/biceps6.gif"),
    ],

    triceps: [
      require("@/assets/gifs/triceps1.gif"),
      require("@/assets/gifs/triceps2.gif"),
      require("@/assets/gifs/triceps3.gif"),
      require("@/assets/gifs/triceps4.gif"),
      require("@/assets/gifs/triceps5.gif"),
      require("@/assets/gifs/triceps6.gif"),
    ],

    shoulders: [
      require("@/assets/gifs/shoulders1.gif"),
      require("@/assets/gifs/shoulders2.gif"),
      require("@/assets/gifs/shoulders3.gif"),
      require("@/assets/gifs/shoulders4.gif"),
      require("@/assets/gifs/shoulders5.gif"),
      require("@/assets/gifs/shoulders6.gif"),
    ],

    abs: [
      require("@/assets/gifs/abs1.gif"),
      require("@/assets/gifs/abs2.gif"),
      require("@/assets/gifs/abs3.gif"),
      require("@/assets/gifs/abs4.gif"),
      require("@/assets/gifs/abs5.gif"),
      require("@/assets/gifs/abs6.gif"),
    ],

    quads: [
      require("@/assets/gifs/quads1.gif"),
      require("@/assets/gifs/quads2.gif"),
      require("@/assets/gifs/quads3.gif"),
      require("@/assets/gifs/quads4.gif"),
      require("@/assets/gifs/quads5.gif"),
      require("@/assets/gifs/quads6.gif"),
    ],

    calves: [
      require("@/assets/gifs/calves1.gif"),
      require("@/assets/gifs/calves2.gif"),
      require("@/assets/gifs/calves3.gif"),
      require("@/assets/gifs/calves4.gif"),
      require("@/assets/gifs/calves5.gif"),
      require("@/assets/gifs/calves6.gif"),
    ],
  };

  const gifs = group ? gifMap[group] || [] : [];

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <FontAwesome
            name="close"
            size={24}
            color="white"
            onPress={onClose}
            style={styles.closeButton}
          />
          <ScrollView contentContainerStyle={styles.gifGrid}>
            {gifs.map((gif, index) => (
              <View key={index} style={styles.gifBox}>
                <ExpoImage source={gif} style={styles.gifImage} />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalContainer: {
    height: "90%",
    width: "100%",
    backgroundColor: "#101111ff",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },

  closeButton: {
    position: "absolute",
    right: "5%",
    top: "2.5%",
    zIndex: 1,
  },

  gifGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    marginTop: "15%",
  },

  gifBox: {
    width: "45%",
    height: 180,
    marginBottom: 15,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#000",
  },

  gifImage: {
    width: "100%",
    height: "100%",
  },
});
