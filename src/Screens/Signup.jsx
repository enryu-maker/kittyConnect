import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import Header from '../Components/Header';

function Signup({navigation}) {
  return (
    <View className="p-4 justify-end align-bottom m-auto content-end h-full bg-white">
      <Text className="text-center py-0 font-bold text-xl font-com">
        Continue to Sign Up for Free
      </Text>
      <Text className="text-center py-4 font-com">
        If you already have an account, we'll log you in...
      </Text>
      <View className="text- p-1 ">
        <TouchableOpacity className="text-center p-2 rounded-2xl font-xl items-center bg-purple-50">
          <Text className="font-medium text-lg font-com">
            Continue with Apple
          </Text>
        </TouchableOpacity>
      </View>
      <View className="text- p-1">
        <TouchableOpacity className="text-center p-2 rounded-2xl font-xl items-center bg-purple-50">
          <Text className="font-medium text-lg font-com">
            Continue with Google
          </Text>
        </TouchableOpacity>
      </View>
      <View className="text- p-1">
        <TouchableOpacity className="text-center p-2 rounded-2xl font-xl items-center bg-purple-50">
          <Text className="font-medium text-lg font-com">
            Continue with Facebook
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" p-1">
        <TouchableOpacity
          className="text-center p-2 rounded-2xl font-bold text-[50px] items-center"
          onPress={() => navigation.navigate('Newaccount')}>
          <Text className="font-medium text-lg font-com">
            Continue Other Way
          </Text>
        </TouchableOpacity>
      </View>
      <Text className="text-center text-xs text-purple-500 font-com">
        By continuing, you agree to the Terms of Use. Read our Privacy Policy
      </Text>
    </View>
  );
}

export default Signup;
