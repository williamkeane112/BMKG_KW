import { Image, StyleSheet, Platform, ImageBackground, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ImageBackground source={require("../../assets/images/bgImage.png")} style={styles.Image}>
      <View>
        <Image source={require("../../assets/images/House.png")} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
