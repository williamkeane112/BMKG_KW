// CardCuacaPerjam.tsx
import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import style from "@/constants/Style";
import { LinearGradient } from "expo-linear-gradient";
import { moderateScale, verticalScale } from "../BreakPoint";

const weatherData = [
  { time: "12 PM", icon: "🌧️", temp: 19, rainChance: "30%" },
  { time: "Now", icon: "🌧️", temp: 20, rainChance: "40%" },
  { time: "2 PM", icon: "🌦️", temp: 22, rainChance: "20%" },
  { time: "3 PM", icon: "☁️", temp: 21, rainChance: "10%" },
  { time: "4 PM", icon: "🌧️", temp: 20, rainChance: "40%" },
  { time: "4 PM", icon: "🌧️", temp: 20, rainChance: "40%" },
  { time: "4 PM", icon: "🌧️", temp: 20, rainChance: "40%" },
];

const CardCuacaPerjam = () => {
  const { stylesCard } = style;
  return (
    <LinearGradient colors={["#3E2D8F", "#9D52AC"]} locations={[0, 0.9]} start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} style={stylesCard.container}>
      <View style={{ paddingHorizontal: 40, paddingVertical: verticalScale(10) }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: moderateScale(20), color: "white" }}>Today</Text>
          <Text style={{ fontSize: moderateScale(20), color: "white" }}>November, 11</Text>
        </View>
      </View>
      <LinearGradient
        colors={["#8E78C8", "#492BA1"]}
        style={{
          // borderWidth: 0.8,
          paddingBottom: 2,
          marginBottom: 10,
        }}
      ></LinearGradient>
      <View style={{ width:"100%", paddingHorizontal: 10  }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 5 }}>
          {weatherData.map((item, index) => (
            <View key={index} style={stylesCard.card}>
              <Text style={stylesCard.time}>{item.time}</Text>
              <Text style={stylesCard.icon}>{item.icon}</Text>
              <Text style={stylesCard.temp}>{item.temp}°</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

export default CardCuacaPerjam;
