import { Modal, StyleSheet, View } from "react-native";

export default function ExerciseModal() {
  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContainer}>

      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
    modalContainer: {
        height: "80%",
        width: "100%",
        backgroundColor: "#25292e",
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        position: "absolute",
        bottom: 0,
    },
});