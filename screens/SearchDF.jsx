import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { client } from "../lib/sanityClient";
import { keys } from "../constants/utils/items";
import ListItemPropsSearch from "../components/ListItemPropsSearch";

const SearchDF = ({ navigation, route }) => {
  const { height, width } = Dimensions.get("screen");

  const [features, setFeatures] = useState([]);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "excipients"  && title=='${route.params?.title}'][0] | order(title asc){
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
        let arr = [];
        keys.map((k) => {
          if (data[k]) {
            arr.push(k);
          }
        });
        setFeatures(arr);
      })
      .catch((error) => console.log(`errorDadash`));
  }, []);

  return (
    <View>
      <ImageBackground
        source={require("../assets/png/header.png")}
        resizeMode="cover"
        style={{
          width: width,
          height: height / 5,
          paddingTop: "4%",
          paddingRight: "4%",
          marginRight: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/png/back.png")}
            resizeMode={"contain"}
            style={{
              width: width / 6,
              height: "30%",
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: "flex-end",
            justifyContent: "flex-end",
            marginBottom: "7%",
          }}
        >
          <Text
            style={{
              color: "#fff",
              marginLeft: "8%",
              marginTop: "4%",
              fontSize: 20,
              marginBottom: "2%",
              fontFamily: 'VazirBold'
            }}
          >
            اپلیکیشن جستجوی دارو
          </Text>
          <Image
            source={require("../assets/png/logo.png")}
            style={{
              width: 100,
              height: 100,
              alignItems: "center",
            }}
          />
        </View>
      </ImageBackground>

      <Text style={{ fontWeight: "bold", fontSize: 25, marginLeft: "5%" }}>
        {route.params?.title}
      </Text>

      {/* <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginBottom: 30,
        }}
      >
        {features?.map((src, index) => {
          return (
            <TouchableOpacity key={index}>
              <View
                key={index}
                style={{
                  marginVertical: 16,
                  marginHorizontal: 25,
                  alignItems: "center",
                  // justifyContent: "center",
                  backgroundColor: "#ced2d5",
                  height: 45,
                  borderRadius: 30,
                  flexDirection: "row",
                  paddingLeft: "5%",
                }}
              >
                <Ionicons
                  name="pricetag"
                  size={26}
                  color="#292524"
                  style={{
                    marginTop: "2%",
                    marginRight: 9,
                  }}
                />
                <Text style={{ fontSize: 18, fontWeight: "500" }}>{src}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView> */}

      <ScrollView
        pagingEnabled
        contentContainerStyle={{
          height: height
        }}
      >
        {/* {route.params?.description.map((src, index) => { */}
        {features?.map((src, index) => {
          return <ListItemPropsSearch src={src} key={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export default SearchDF;
