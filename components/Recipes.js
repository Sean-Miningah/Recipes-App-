import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { EmojiHappyIcon, EmojiSadIcon, CheckCircleIcon } from 'react-native-heroicons/solid'

const Recipes = ({
    id, 
    title, 
    image, 
    usedIngredientCount, 
    missedIngredientCount,
    missedIngredients, 
    usedIngredients,
    likes,
}) => {
  return (
    <TouchableOpacity 
			className="flex-row my-2 rounded-2xl bg-amber-100 items-center justify-around"
			onPress={()=> {
				
			}}
		>
				<View className="mx-2">
					<Image
						source={{
							uri: "https://cdn.pixabay.com/photo/2014/04/22/02/56/pizza-329523_960_720.jpg",
						}}
						// className="h-4 w-fit rounded-sm"
						className="object-fit h-44 w-32 rounded-3xl"
					/>
				</View>			
        <View className="w-1/2" >
            <View className="mx-w-sm">
                <Text className="text-xl">Food Title of peoples, the various food </Text>
            </View>
            <View className="flex-row">
                <Text className="text-sm"> 4 </Text>
								<CheckCircleIcon color="pink" size={20}/>
            </View>
            <View className="">
                <View className="flex-row">
                    <EmojiSadIcon color="red" size={20}/>
                    <Text> 3 missed ingredient(s)</Text>
                </View>
                <View className="flex-row">
                    <EmojiHappyIcon color="green" size={20}/>
                    <Text> 3 missed ingredient(s)</Text>
                </View>
            </View>
        </View>   
    </TouchableOpacity>
  )
}

export default Recipes