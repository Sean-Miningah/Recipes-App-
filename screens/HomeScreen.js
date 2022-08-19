import { View, Text, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { MenuAlt2Icon, SearchIcon } from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native'

import Recipes from '../components/Recipes'
import data from '../dummyData.json'

const HomeScreen = () => {

	const [featuredSearch, setFeaturedSearch]=useState([])
	const [searchValue, setSearchValue]=useState("")

	const key = "b5023e72ee484e13b3b9d84d113f581d"
	const spoonAcular = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}&ingredients=${searchValue}&number=10&limitLicense=true&ranking=1&ignorePantry=false`
	

	const navigation = useNavigation()

	const testData = data

	useLayoutEffect(() =>{
		navigation.setOptions({
			headerShown:false,
		})
	},[])

	useEffect(() => {

	}, [])

const searchMealData = () => {
	console.log("Start ...............!")
	fetch(spoonAcular, {
		method: 'GET',
	})
	.then((response) => {return response.json()})
	.then(data => setFeaturedSearch(data))
	.catch((error) => {
		console.error(error)
	})
}


  return (
		<View className="bg-white-200 px-5 py-4" style={{flex:1}}>

			{/* Header */}
			<View className="pb-3">
				<View className="py-3">
					<MenuAlt2Icon size={30} color="black" />
				</View>
				<View className="py-1">
					<View className="pb-6 w-4/5">
						<Text className="font-bold text-3xl"> What ingredients do you have in you pantry? </Text>
					</View>
					<View className="flex-row bg-gray-200 h-12 rounded-xl items-center">
						<View className="pl-3">
						  <SearchIcon  className="pl-3" color="orange" size={35} />
						</View>
						<TextInput 
						  className="pl-3"
						  keyboardType="default"
						  placeholder="Search for query 'onions, tomatoes, spinach'"
						  onChangeText={(text) => setSearchValue(text)}
						  onSubmitEditing={() => searchMealData()}					
						/>
					</View>
				</View>
			</View>

			{/* Recipes */}	
			<ScrollView 
			  showsVerticalScrollIndicator={false}
			>
				{featuredSearch?.map((test) => (
					<Recipes 
						key={test.id}
						title={test.title}
						image={test.image}
						usedIngredientCount={test.usedIngredientCount}
						missedIngredientCount={test.missedIngredientCount}
						missedIngredients={test.missedIngredients}
						usedIngredients={test.usedIngredients}
						likes={test.likes}
					/>	
				))}
			</ScrollView>
		</View>
  )
}

export default HomeScreen