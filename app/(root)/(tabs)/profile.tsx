import { Image, Text, View, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { icons, images } from '@/constants'
import {  useAuth, useUser } from '@clerk/clerk-expo'


const Profile = () => {

    const { user } = useUser();
 return (
    <SafeAreaView className="flex-1 bg-white ">
         <ScrollView>
       <View className="flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
        <View className="flex flex-row items-center">
          <Image  
             className="ml-5 h-15 w-15"
             source={icons.person}
             resizeMode="contain">
         </Image>     
       
        </View>

        <View className="flex flex-row justify-center absolute-left">
        <Text 
             className="text-xl capitalize font-JakartaBold text-green-600 items-center justify-center">
             {user?.firstName || user?.emailAddresses[0].emailAddress.split('@')[0]}
          </Text>
          </View> 
           <Text className="text-md items-center justy-center font-JakartaSemiBold text-gray-500">
              Edit my profile  🖊
           </Text>
        </View>

        <View className="mt-3 flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <Text className="text-md items-center justy-center font-JakartaSemiBold">
               My favorite trip 🚘
            </Text>  
        </View>

        <View className="mt-3 flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <Text className="text-md items-center justy-center font-JakartaSemiBold">
               My Payment Methods 💳 
            </Text>  
        </View>

        <View className="mt-3 flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <Text className="text-md items-center justy-center font-JakartaSemiBold">
                Help Center 📮 
            </Text>  
        </View>

        <View className="mt-3 flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <Text className="text-md items-center justy-center font-JakartaSemiBold">
               My Address 📍
            </Text>  
        </View>

        <View className="mt-3 flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <Text className="text-md items-center justy-center font-JakartaSemiBold">
                Setting  ⚙️
            </Text>
        </View>

        <View className="mt-3 flex flex-col items-start justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 px-5 py-3">
            <Text className="text-md items-center justy-center font-JakartaSemiBold">
              Changes in terms and conditions 📃
            </Text>  
        </View>
        

         
       
    

        </ScrollView>    
    </SafeAreaView>
 )
}

export default Profile