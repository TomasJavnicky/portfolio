import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../utils/colors";
import BottomNavBarButton from "../components/BottomNavBarButton";
import {
  HomeIcon,
  VideoIcon,
  FriendsIcon,
  ProfileIcon,
  NotificationsIcon,
} from "./icons";
import MenuIcon from "./MenuIcon";

export default BottomNavBar = () => {
  return (
    <View style={styles.main}>
      <BottomNavBarButton icon={<HomeIcon />} text={"Home"} isPressed={true} />
      <BottomNavBarButton
        icon={<VideoIcon />}
        text={"Video"}
        isPressed={false}
      />
      <BottomNavBarButton
        icon={<FriendsIcon />}
        text={"Friends"}
        isPressed={false}
      />
      <BottomNavBarButton
        icon={<ProfileIcon />}
        text={"Profile"}
        isPressed={false}
      />
      <BottomNavBarButton
        icon={<NotificationsIcon />}
        text={"Notifications"}
        isPressed={false}
      />
      <BottomNavBarButton icon={<MenuIcon />} text={"Menu"} isPressed={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.background,
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});
