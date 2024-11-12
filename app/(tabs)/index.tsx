import React from "react";
import { View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import style from "@/constants/Style";
import CardCuacaPerjam from "@/components/card/CuacaPerjam";
import { LinearGradient } from "expo-linear-gradient";

export default function YourComponent() {
  const { styles } = style;
  return (
    <ImageBackground source={require("../../assets/images/bgImage.png")} style={styles.imageBackground}>
      <TouchableOpacity style={styles.textContainer}>
        <Text style={styles.locationText}>Cengkareng</Text>
        <Text style={styles.temperatureText}>19°</Text>
        <Text style={styles.weatherText}>Hujan</Text>
        <View style={styles.highLowContainer}>
          <Text style={styles.highLowText}>H:19°</Text>
          <Text style={styles.highLowText}>L:19°</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <Image source={require("../../assets/images/House.png")} style={styles.centeredImage} />
      </View>

      <View  style={styles.containerCard}>
        <CardCuacaPerjam />
      </View>
      <View style={styles.tabBarContainer}>
        <Text style={{ color: "white" }}>Hello</Text>
      </View>
    </ImageBackground>
  );
}
