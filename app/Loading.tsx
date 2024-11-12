import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from "@/components/BreakPoint";

const Loading = () => {
  return (
    <ImageBackground source={require("../assets/images/bgImage.png")} style={styles.imageBackground}>
          <View style={styles.container}>
      {/* Bagian Ikon Cuaca */}
      <View style={styles.weatherIconContainer}>
        <Image 
          source={{ uri: '../assets/images/loadingImage.png' }} // Ganti dengan URL ikon yang sesuai
          style={styles.weatherIcon}
        />
      </View>

      {/* Bagian Teks Judul */}
      <Text style={styles.title}>BMKG</Text>
      <Text style={styles.subtitle}>KW SUPER</Text>

      {/* Tombol Get Start */}
      <Text style={{ color:"white", fontSize:moderateScale(30), marginTop:50 }}>Loading...</Text>
    </View>
    </ImageBackground>

  );
};

export default Loading;
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: verticalScale(30)
  },
  weatherIconContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  weatherIcon: {
    width: horizontalScale(400),
    height: verticalScale(400),
  },
  title: {
    fontSize: moderateScale(50),
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: verticalScale(44)
  },
  subtitle: {
    fontSize: moderateScale(40),
    color: '#FFDD44', // Warna teks ForeCasts
  },
  button: {
    marginTop: 20,
    backgroundColor: '#FFDD44', // Warna tombol kuning
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  buttonText: {
    color: '#4c2882', // Warna teks pada tombol
    fontWeight: 'bold',
    fontSize: 18,
  },
});
