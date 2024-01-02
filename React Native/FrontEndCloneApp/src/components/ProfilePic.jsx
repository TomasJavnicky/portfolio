import { StyleSheet, Image, TouchableOpacity } from "react-native";

export default ProfilePic = () => {
  return (
    <TouchableOpacity>
      <Image
        source={require("../img/profile_pic.jpeg")}
        style={styles.profilePic}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
});
