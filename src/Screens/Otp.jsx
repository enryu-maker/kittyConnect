import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import OTPTextView from 'react-native-otp-textinput';

export default function Otp({navigation}) {
  return (
    <View className="h-full p-4 bg-white">
      <Text className="font-com font-bold text-xl text-center">
        Enter the code that,
      </Text>
      <Text className="font-com font-bold text-xl text-center">
        We Texted on Your Mail
      </Text>
      <View className="px-6">
        <OTPTextView
          pinCount={4}
          caretHidden={true}
          className="border-solid border-[1px] w-10 h-12 text-center p-2 mt-5 rounded-lg bg-purple-50 border-purple-600"></OTPTextView>
      </View>
      <View className="p-4 pt-6 ">
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          className="text-center p-2 rounded-2xl font-xl items-center bg-purple-500">
          <Text className="font-medium text-lg font-com text-white">
            Continue
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Kitty')}>
          <Text className="font-com font-bold text-lg text-center pt-4">
            Try Different Method
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
