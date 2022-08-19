import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'


import { ChevronLeftIcon } from 'react-native-heroicons/solid';
import { BookmarkIcon } from 'react-native-heroicons/solid';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const Recipe = () => {

	const navigation = useNavigation();

	const { params:{
		id,
		title, 
		image, 
		usedIngredientCount, 
		missedIngredientCount,
		missedIngredients, 
		usedIngredients,
		likes
	}} = useRoute();

  useLayoutEffect(()=>{
		navigation.setOptions({
			headerShown:false,
		})
	}, [])

	console.log(image)

  return (
		<View style={{flex:1}}>
			<ScrollView>
				<View>
					<Image 
						source ={{
							uri: image,
						}}
						className="w-full h-56"
					/>
					<TouchableOpacity
					  className="absolute top-8 left-5 p-2"
					>
					  <ChevronLeftIcon size={40} color="black"/>
					</TouchableOpacity>

					<TouchableOpacity
					  className="absolute top-8 right-5 p-2"
					>
					  <BookmarkIcon size={40} color="black"/>
					</TouchableOpacity>	
				</View>

				{/* Body */}
				{/* Recipe Description */}
				<View className="px-4">
						<View className="py-3">
							<Text className="text-2xl">{title}</Text>
						</View>
						<View className=" flex-row w-full">
							<View className="bg-lime-300/50 h-30 items-center p-2 m-2 flex-auto">
								<Text className="text-green-900 text-4xl">{usedIngredientCount}</Text>
								<Text className="font-bold tracking-wide" > used ingredients</Text>
							</View>
							<View className="bg-pink-300/50 h-30 items-center p-2 m-2 flex-auto">
								<Text className="text-green-900 text-4xl">{likes}</Text>
								<Text className="font-bold tracking-wide" > likes</Text>
							</View>
							<View className="bg-yellow-300/50 h-30 items-center p-2 m-2 flex-auto">
								<Text className="text-green-900 text-4xl">{missedIngredientCount}</Text>
								<Text className="font-bold tracking-wide" > used ingredients</Text>
							</View>	
						</View>
						<Text className="text-xl m-2 border-b pb-2">Missed Ingredients</Text>

						{missedIngredients?.map((ingredient) => (
							<Ingredient 
							  key={ingredient.id}
								unit={ingredient.handful}
								
							/>
						))}
				</View>
			</ScrollView>
		</View>
  )
}

export default Recipe