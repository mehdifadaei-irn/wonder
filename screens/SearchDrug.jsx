import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { bgs, icons, items } from "../constants/utils";
import { useFonts } from "expo-font";
import Styles, { COLORS } from "../constants/styles/Styles";
import ListItem2Cols from "../components/ListItem2Cols";
import { DrugsContext } from "../context/context-store";
import { client } from "../lib/sanityClient";

export default function SearchDrug({ navigation, route }) {
  const [loaded] = useFonts({
    Montserrat: require("../assets/fonts/Montserrat-BoldItalic.ttf"),
  });
  const { width, height } = Dimensions.get("screen");

  const [loading, setLoading] = useState(true);
  const [myData, setMyData] = useState();
  const [input, setInput] = useState("");

  const test = useContext(DrugsContext);

  useEffect(() => {
    if (input) {
      let newList = test.mainDataE.filter((d) =>
        d.title.toLowerCase().includes(input)
      );
      setMyData(newList);
    }
    if (!input && test.mainDataE) {
      client
        .fetch(
          `*[_type == "excipients"] | order(title asc){
            _id,
        title,
        emulsifying,
        solvent,
        diluent,
        stabilizing,
        suspending,
        binder,
        disintegrant,
        viscosity_increasing,
        thickener,
        sweetening,
        acidifying,
        plasticizer,
        suppository_base,
        sustained_extended_control,
        therapeutic_agent,
        skin_penetrant,
        bioabsorbable,
        biocompatible,
        biodegradable,
        oleaginous_vehicle,
        antioxidant,
        vaccine_adjuvant,
        adsorbent,
        dispersing_Solid,
        gelling_agent,
        opacifier,
        alkalizing,
        film_former_coating,
        enteric_coating,
        humectant,
        antimicrobial_preservative,
        antiseptic,
        disinfectant,
        solubilizing,
        wetting_agent,
        buffering,
        dietary_supplement,
        lubricant_glidant,
        anticaking,
        bioadhesive,
        release_modifying,
        aerosol_propellant,
        air_displacement,
        water_absorbing,
        water_repelling_agent,
        stiffening_agent,
        cationic_surfactant,
        anionic,
        mucoadhesive,
        flavor_enhancer,
        chelating,
        colorants,
        granulating,
        alcohol_denaturant,
        tonicity_agent,
        antifoaming,
        Penetration_enhancer,
        chelating_agent,
        taste_masking,
        fixative,
        membrane,
        transdermal_backing,
        dissolution_enhancer,
        nonionic_surfactant,
        cosmetic_ingredient,
        diagnostic_aid,
        acidulant,
        directly_compressible_tableting_excipient,
        lyophilization_aid,
        ointment_base,
        food_additive,
        surfactant,
        antiadherent,
        antacid,
        organic_base,
        color_dispersant,
        complexing_agent,
        gas_forming,
        sequestering_agent,
        sterilizing_agent,
        esterifying_agent,
        water_miscible_cosolvent,
        crystallization_modifier_Inhibitor_sucrose,
        stabilizer_for_freeze_dried_formulations,
        blood_substitute_stabilizer,
        channeling_agent,
        osmotic_agent,
        porosity_modifier,
        blood_anticoagulant,
        detergent,
        water_holding,
        cooling_agent,
        pigment,
        polishing_agent
          }`
        )
        .then((data) => {
          test.setMainDataE(data);
          setLoading(false);
          setMyData(data);
          // console.log(data);
        })
        .catch((error) => console.log(`errorDadash: ${error}`));
    }
    if (!test.mainDataE) {
      setMyData(test.mainDataE);
    }
  }, [input]);

  if (!loaded) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="default" />

      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.BCG_WHITE,
        }}
      >
        <View style={Styles.footer}>
          {/* <Image
            source={require("../assets/png/footer2.png")}
            resizeMode={"stretch"}
            style={{ height: height / 6, width: width }}
          /> */}
        </View>
        <ImageBackground
          source={require("../assets/png/header.png")}
          style={{
            width: width,
            height: height / 5,
            zIndex: 20,
          }}
          resizeMode={"cover"}
        >
          <View
            style={{
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                width: "55%",
                position: "absolute",
                top: "12%",
                left: 10,
                ...Styles.sectionStyle,
                flexDirection: "row-reverse",
              }}
            >
              <Image
                source={require("../assets/png/search.png")}
                style={{
                  width: "15%",
                  height: "83%",
                }}
                resizeMode="cover"
              />
              <TextInput
                placeholder="جستجو"
                value={input}
                onChangeText={(text) => setInput(text)}
                onClear={() => setInput("")}
                style={{
                  width: "80%",
                  flexDirection: "row-reverse",
                  fontFamily: "VazirBold",
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                marginRight: 20,
                marginTop: 20,
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 16,
                    color: COLORS.BCG_WHITE,
                    fontFamily: "VazirBold",
                  }}
                >
                  اپلیکیشن جستجوی چیز
                </Text>
              </View>
              <View style={{ marginTop: "1%" }}>
                <Image
                  source={require("../assets/png/logo.png")}
                  resizeMode={"contain"}
                  style={{
                    width: 100,
                    height: 100,
                    alignItems: "center",
                  }}
                />
              </View>
            </View>
          </View>
        </ImageBackground>
        <View
          style={{
            marginHorizontal: "10%",
            marginTop: "-10%",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 23,
              fontFamily: "VazirBold",
              marginBottom: 9,
            }}
          >
            تمام چیزها
          </Text>
        </View>

        {loading ? (
          <View>
            <Text>loading.....</Text>
          </View>
        ) : (
          <View>
            <FlatList
              columnWrapperStyle={{ justifyContent: "space-around" }}
              numColumns={2}
              data={myData}
              renderItem={({ item }) => {
                return <ListItem2Cols item={item} />;
              }}
            />
          </View>
        )}
      </View>
    </>
  );
}
