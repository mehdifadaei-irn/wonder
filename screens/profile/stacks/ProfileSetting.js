import { View, Text, Pressable } from 'react-native'
import React from 'react'

const ProfileSetting = ({ navigation }) => {

  const goBack=()=> {
    navigation.goBack();
  }

  return (
    <View style={{marginTop: 100}}>
      <Text>ProfileSetting</Text>
      <Pressable onPress={goBack} >
        <Text>Back</Text>
      </Pressable>
    </View>
  )
}

export default ProfileSetting