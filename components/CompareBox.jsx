import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DrugsContext } from "../context/context-store";
import { client } from "../lib/sanityClient";
import { ScrollView } from "react-native";
import { keys } from "../constants/utils/items";

const CompareBox = ({ title, LOR }) => {
  const { width, height } = Dimensions.get("screen");
  const [featuresL, setFeaturesL] = useState([]);
  const [features, setFeatures] = useState([]);

  const navigation = useNavigation();
  const { setLeftItem, setRightItem, rightItem, LeftItem } =
    useContext(DrugsContext);

  useEffect(() => {
    if (rightItem) {
      client
        .fetch(
          `*[_type == "excipients"  && title=='${rightItem}'][0] | order(title asc){
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
    } else {
      console.log("right is empty");
    }
    if (LeftItem) {
      client
        .fetch(
          `*[_type == "excipients"  && title=='${LeftItem}'][0] | order(title asc){
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
          setFeaturesL(arr);
        })
        .catch((error) => console.log(`errorDadash`));
    } else {
      console.log("left is empty");
    }
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          if (LOR == "right") {
            setRightItem("");
            setFeatures([]);
          } else {
            setLeftItem("");
            setFeaturesL([]);
          }
        }}
        style={{
          zIndex: 20,
          width: width / 5,
        }}
      >
        <Image
          source={require("../assets/png/zarb2.png")}
          style={{
            width: 26,
            height: 26,
            marginLeft: 6,
          }}
        />
      </TouchableOpacity>
      <ImageBackground
        source={require("../assets/png/Group29.png")}
        style={{
          width: width / 1.6 + 10,
          height: height / 4.8,
          position: "absolute",
          right: "-16%",
          alignItems: "center",
          justifyContent: "center",
        }}
        resizeMode={"cover"}
      >
        <Text
          style={{
            marginTop: "18%",
            fontSize: 16,
            maxWidth: 150,
            fontWeight: 'bold'
          }}
        >
          {title}
        </Text>
      </ImageBackground>
      <ScrollView>
        <View
          style={{
            maxWidth: "82%",
            marginTop: "23%",
            height: height / 1.5,
            backgroundColor: "#2ab9cc30",
            alignItems: "center",
            marginLeft: "9%",
            paddingTop: "60%",
          }}
        >
          {LOR == "right"
            ? features.map((feature, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginTop: 4,
                      borderWidth: 2,
                      borderRadius: 10,
                      width: "90%",
                      height: "13%",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      borderColor: "#2ab9cc",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text>{feature}</Text>
                  </View>
                );
              })
            : featuresL.map((feature, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginTop: 4,
                      borderWidth: 2,
                      borderRadius: 10,
                      width: "90%",
                      height: "13%",
                      justifyContent: "center",
                      backgroundColor: "#fff",
                      borderColor: "#2ab9cc",
                      paddingHorizontal: 10,
                    }}
                  >
                    <Text>{feature}</Text>
                  </View>
                );
              })}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompareBox;
