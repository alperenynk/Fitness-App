import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Modal, StyleSheet, View } from "react-native";

type ExerciseModalProps = {
  visible: boolean;
  onClose: () => void;
};

export default function ExerciseModal({ visible, onClose }: ExerciseModalProps) {
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.modal}>
        <View style={styles.modalContainer}>
          <FontAwesome name="close" size={24} color="black" onPress={onClose} style={styles.closeButton}/>
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
    height: "80%",
    width: "100%",
    backgroundColor: "#a69898ff",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
  },

  closeButton: {
    position: "absolute",
    right: "5%",
    top: "2.5%",
  },
});
