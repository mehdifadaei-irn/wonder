import { StyleSheet } from "react-native";

//index
//export { default, assets } from "./index";

export const COLORS = {
  BCG_WHITE: "#ffffff",
  PRIMARY: "#2ab9cc",
};
export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};
export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.BLAXK,
  },
  //   container: {
  //     flex: 1,
  //     backgroundColor: COLORS.background1,
  //   },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  scrollview: {
    flex: 1,
  },
  exampleContainer: {
    paddingVertical: 30,
  },
  exampleContainerDark: {
    backgroundColor: COLORS.BLAXK,
  },
  exampleContainerLight: {
    backgroundColor: "white",
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  titleDark: {
    color: COLORS.BLAXK,
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.75)",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center",
  },
  slider: {
    marginTop: 15,
    overflow: "visible", // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  paginationDot: {
    width: 50,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionStyle: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 20,
    height: '16%',
    margin: 10,
    paddingHorizontal: 10,
    marginTop: '7%'
  },
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 12,
  },
  header: {
    height: "10%",
    backgroundColor: "#2ab9cc",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  ListItemPropsSearch: {
    margin: 15,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: COLORS.BCG_WHITE,
    paddingLeft: 16,
    borderColor: COLORS.PRIMARY,
    borderWidth: 2,
    elevation: 2,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    width: '90%',
    paddingBottom: 4
  },
});
