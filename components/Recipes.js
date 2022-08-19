import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native"
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

	const navigation = useNavigation();

  return (
    <TouchableOpacity 
			className="flex-row my-2 rounded-2xl bg-amber-100 items-center justify-around"
			onPress={()=> {
				navigation.navigate("Recipe", {
					id,
					title, 
					image, 
					usedIngredientCount, 
					missedIngredientCount,
					missedIngredients, 
					usedIngredients,
					likes,
				})
			}}
		>
				<View className="mx-2">
					<Image
						source={{
							uri: image,
						}}
						// className="h-4 w-fit rounded-sm"
						className="object-fit h-44 w-32 rounded-3xl"
					/>
				</View>			
        <View className="w-1/2" >
            <View className="mx-w-sm">
                <Text className="text-xl">{title}</Text>
            </View>
            <View className="flex-row">
                <Text className="text-sm">{likes}</Text>
								<CheckCircleIcon color="pink" size={20}/>
            </View>
            <View className="">
                <View className="flex-row">
                    <EmojiSadIcon color="red" size={20}/>
                    <Text>{missedIngredientCount} missed ingredient(s)</Text>
                </View>
                <View className="flex-row">
                    <EmojiHappyIcon color="green" size={20}/>
                    <Text> {usedIngredientCount} used ingredient(s)</Text>
                </View>
            </View>
        </View>   
    </TouchableOpacity>
  )
}

export default Recipes