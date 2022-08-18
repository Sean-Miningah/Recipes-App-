import { View, Text, StatusBar, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MenuAlt2Icon, SearchIcon } from "react-native-heroicons/outline"
import { useNavigation } from '@react-navigation/native'

import Recipes from '../components/Recipes'

const HomeScreen = () => {
	const navigation = useNavigation()


	useLayoutEffect(() =>{
		navigation.setOptions({
			headerShown:false,
		})
	},[])

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
						/>
					</View>
				</View>
			</View>

			{/* Recipes */}	
			<ScrollView 
			  showsVerticalScrollIndicator={false}
			>
				<Recipes />	
				<Recipes />
				<Recipes />
			</ScrollView>
		</View>
  )
}

export default HomeScreen