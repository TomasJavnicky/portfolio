import { View, FlatList, StyleSheet } from "react-native";
import Todo from "./Todo";
import { todoListAtomsAtom } from "../utils/atoms";
import { useAtomValue } from "jotai";

interface Props {}

const TodosList: React.FC<Props> = () => {
  const todoListAtoms = useAtomValue(todoListAtomsAtom);

  return (
    <View style={styles.main}>
      <FlatList
        data={todoListAtoms}
        renderItem={({ item, index }) => <Todo titleAtom={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: 10,
  },
});

export default TodosList;
