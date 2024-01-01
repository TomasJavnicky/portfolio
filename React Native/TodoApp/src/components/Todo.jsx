import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/colors";
import { Feather } from "@expo/vector-icons";

export default Todo = ({ title, onDelete }) => {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => onDelete(title)}>
        <Feather
          name="trash-2"
          size={22}
          color={COLORS.complementary}
          style={styles.trash}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.todoBackgroundColor,
    width: "80%",
    height: 80,
    borderRadius: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignSelf: "center",
  },
  text: {
    fontSize: 22,
    fontWeight: "500",
    paddingLeft: 20,
  },
  trash: {
    paddingRight: 20,
  },
});
