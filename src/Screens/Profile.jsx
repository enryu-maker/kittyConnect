import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {LineChart} from 'react-native-gifted-charts';

const Profile = ({navigation}) => {
  const [members, setMembers] = useState(['You', 'John', 'Alice', 'Bob']); // Initial members list

  const lineData = [
    {value: 0, label: 'Jan'},
    {value: 10, label: 'Feb'},
    {value: 8, label: 'Mar'},
    {value: 58, label: 'Apr'},
    {value: 56, label: 'May'},
    {value: 78, label: 'Jun'},
    {value: 74, label: 'Jul'},
    {value: 98, label: 'Aug'},
  ];

  const renderMembers = () => {
    return members.map((member, index) => (
      <Text
        key={index}
        className="py-3 pl-2 text-lg font-com w-full active:bg-slate-800">
        {member}
      </Text>
    ));
  };

  return (
    <View className="p-4 font-com bg-white h-full">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="font-com py-4 pb-2 font-semibold text-xl">
          Account Balance
        </Text>
        <Text className="font-com font-bold text-4xl">$5000</Text>

        <View className="-py-2">
          <LineChart
            className=""
            areaChart
            curved
            data={lineData}
            height={250}
            hideYAxisText
            hideAxesAndRules
            yAxis={{visible: false}}
            spacing={43}
            initialSpacing={20}
            color1="#7e22ce"
            textColor1="green"
            dataPointsColor1="#6b21a8"
            startFillColor1="#a855f7"
            startOpacity={0.8}
            endOpacity={0.3}
          />
        </View>
        <View>
          <Text className="font-com font-bold text-3xl py-4 pb-1">
            Kitty's Reunion
          </Text>
          <Text className="font-com font-normal text-base">Group of 10</Text>
          <Text className="font-com font-extrabold text-2xl py-6 pb-2">
            Schedule
          </Text>
        </View>
        <View className="flex flex-row justify-between bg-purple-50 p-3 rounded-lg">
          <View>
            <Text className="font-com font-normal text-xl">
              Contribute 100$
            </Text>
            <Text className="font-com font-normal text-md">
              Every 2 Weeks on Friday
            </Text>
          </View>
          <View>
            <TouchableOpacity className="text-center p-2 rounded-2xl font-xl items-center bg-purple-500">
              <Text className=" text-md m-auto flex p-1 px-6 font-bold font-com text-white">
                Edit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="py-1">
          <View>
            <Text className="font-com font-extrabold text-2xl py-6 pb-2">
              Members
            </Text>
            <View>{renderMembers()}</View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Newkitty')}
          className="text-center p-2 rounded-md font-xl items-center bg-purple-500">
          <Text className=" text-md m-auto flex p-1 px-6 font-extrabold font-com text-white">
            Create a Kitty
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Profile;
