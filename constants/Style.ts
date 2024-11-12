import { horizontalScale, moderateScale, verticalScale } from "@/components/BreakPoint";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    resizeMode: "cover",
  },
  textContainer: {
    alignItems: "center",
    marginBottom: verticalScale(20),
    marginTop: verticalScale(90),
  },
  locationText: {
    color: "white",
    fontSize: moderateScale(35),
    fontWeight: "bold",
    marginBottom: verticalScale(5),
  },
  temperatureText: {
    color: "white",
    fontSize: moderateScale(80),
    fontWeight: "200",
    marginBottom: verticalScale(5),
  },
  weatherText: {
    color: "white",
    fontSize: moderateScale(25),
    marginBottom: verticalScale(10),
  },
  highLowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: horizontalScale(100),
  },
  highLowText: {
    color: "white",
    fontSize: moderateScale(20),
  },
  centeredView: {
    justifyContent: "center",
  },
  centeredImage: {
    resizeMode: "contain",
    marginTop: verticalScale(40),
  },
  containerCard: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: verticalScale(190),
  },
  tabBarContainer: {
    bottom: 0,
  },
});

const stylesCard = StyleSheet.create({
  container: {
    marginTop: -55,
    borderRadius: 30,
    // paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 5
  },
  header: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: moderateScale(40),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(10),
    marginRight: horizontalScale(10),
    alignItems: "center",
    justifyContent: "center",
    width: horizontalScale(60),
    height: verticalScale(130),

  },
  time: {
    color: "white",
    fontSize: moderateScale(15),
    marginBottom: 5,
  },
  icon: {
    fontSize: moderateScale(35),
    marginBottom: 5,
  },
  temp: {
    color: "white",
    fontSize: moderateScale(20),
    fontWeight: "500",
  },
  rainChance: {
    color: "lightblue",
    fontSize: moderateScale(10),
  },
});



export default { styles, stylesCard };
