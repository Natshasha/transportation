import { icons } from "@/constants"
import { router } from "expo-router"
import React, { useRef } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import Map from "./Map"
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet"


const RideLayout = ({ title, children, snapPoints } : { 
    title: string;
    children: React.ReactNode;
    snapPoints?: string[];
}) => {

        const bottomSheetRef = useRef<BottomSheet>(null);

 return (
    <GestureHandlerRootView>
      <View className="flex-1 bg-white">
         <View className="flex flex-col h-screen bg-blue-500">
            <View className="flex flex-row absolute z-10 top-16 items-center justify-start px-5">
              <TouchableOpacity onPress={() => router.back()}>
                <View className="w-9 h-9 bg-white rounded-full items-center justify-center">
                  <Image 
                     source={icons.backArrow}
                     resizeMode="contain"
                     className="w-5 h-5"
                   />
                </View>
              </TouchableOpacity>
               <Text className="text-xl font-Jakarta ml-3">
                  {title || "Go Back" } 
               </Text>
            </View>

              <Map/>         
        </View>

        <BottomSheet
         ref={bottomSheetRef}
         snapPoints={snapPoints || ["40%", "85%"]}
         index={0}
        >
         <BottomSheetView
           style={{ flex:1, padding: 20}}>
            {children}
         </BottomSheetView>
        </BottomSheet>
 
      </View>
    </GestureHandlerRootView>

 )
}
export default RideLayout