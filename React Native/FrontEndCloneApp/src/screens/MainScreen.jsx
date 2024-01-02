import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import TopButton from "../components/TopButton";
import ProfilePic from "../components/ProfilePic";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { COLORS } from "../utils/colors";
import { PhotoVideoIcon } from "../components/icons";
import Stories from "../components/Stories";

export default MainScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        //source={require("../img/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <SafeAreaView style={styles.main}>
          <View style={styles.topBar}>
            <Image
              source={require("../img/facebook_logo.png")}
              style={styles.logo}
            />
            <View style={styles.topIcons}>
              <TopButton
                icon={<Entypo name="plus" size={27} color="black" />}
              />
              <TopButton
                icon={
                  <Entypo name="magnifying-glass" size={27} color="black" />
                }
              />
              <TopButton
                icon={
                  <FontAwesome5
                    name="facebook-messenger"
                    size={22}
                    color="black"
                  />
                }
              />
            </View>
          </View>
          <View style={styles.secondRow}>
            <View style={styles.statusInput}>
              <ProfilePic />
              <Text style={styles.fakeTextInput}>What's on your mind?</Text>
            </View>
            <TouchableOpacity>
              <PhotoVideoIcon style={styles.photoVideoIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.separator} />
          <Stories />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  logo: {
    width: 134,
    height: 50,
    resizeMode: "contain",
    marginLeft: 12,
    marginTop: 7,
  },
  image: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topIcons: {
    width: 142,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 12,
  },
  secondRow: {
    marginLeft: 12,
    paddingTop: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  statusInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  fakeTextInput: {
    fontSize: 15.8,
    marginLeft: 8,
  },
  photoVideoIcon: {
    marginRight: 21,
  },
  separator: {
    marginTop: 12.5,
    backgroundColor: COLORS.separator,
    height: 7.5,
    width: "100%",
    marginBottom: 12.5,
  },
});
