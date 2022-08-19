import { View, Text, Image } from 'react-native'
import React from 'react'

const Ingredient = ({ name, image, amount, unit }) => {
  return (
    <View className=" rounded-xl bg-orange-100 m-3 p-3 h-30">
        <View className="flex-row">
            <Image 
            source={{
                uri: image
            }}
            className="h-20 w-1/2 border border-cyan-600 rounded-lg"
            />
            <View>
            <View className="m-1">
            <Text className="text-base tracking-wide font-semibold"> {name}</Text>
            </View>
            <Text className="italic leading-5 text-green-900"> Units: {unit}</Text>
            <Text className="italic leading-5 text-green-900"> Amount: {amount}</Text>
            </View>
        </View>
       

    </View>
  )
}

export default Ingredient