import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

function Newaccount({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submittedInfo, setSubmittedInfo] = useState([]);

  const handleSubmit = () => {
    // Create a new object representing the submitted information
    const newInfo = {email, password};
    // Add the new object to the submittedInfo array
    setSubmittedInfo([...submittedInfo, newInfo]);
    // Clear the form fields after submission
    setEmail('');
    setPassword('');
    navigation.navigate('Otp');
  };

  return (
    <View className="bg-white h-full p-4">
      <Text className="text-start py-4 font-bold text-2xl font-com">
        Create your Account
      </Text>
      <Text className="text-start pt-4 font-bold text-xl font-com">Email</Text>
      <TextInput
        value={email}
        onChangeText={text => setEmail(text)}
        keyboardType="email-address"
        className="h-10 bg-purple-50 p-2 mb-4 mt-2 border-solid border-[1px] border-purple-400 font-com rounded-lg"
      />
      <Text className="text-start pt-4 font-bold text-xl font-com">
        Password
      </Text>
      <TextInput
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
        className="h-10 bg-purple-50 p-2 mb-4 mt-2 border-solid border-[1px] border-purple-400 font-com rounded-lg"
      />
      <TouchableOpacity
        onPress={handleSubmit}
        className="text-center p-2 rounded-2xl font-xl items-center bg-purple-500">
        <Text className="font-medium text-lg font-com text-white">
          Continue
        </Text>
      </TouchableOpacity>

      {/* Display submitted information */}
      {submittedInfo.length > 0 && (
        <View className="mt-4">
          <Text className="font-bold text-xl font-com">
            Submitted Information:
          </Text>
          {submittedInfo.map((info, index) => (
            <View key={index} className="mt-2">
              <Text>Email: {info.email}</Text>
              <Text>Password: {info.password}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default Newaccount;
