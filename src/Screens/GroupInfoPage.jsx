import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const GroupInfoPage = ({route, navigation}) => {
  const {groupName, owner, member} = route.params;

  const handleJoinGroup = () => {
    alert(`You joined the group: ${groupName}`);
    // You can implement the logic to join the group here
  };

  return (
    <View className="flex-1 justify-between items-center pb-8 pt-4 p-4 bg-white">
      <View className="w-full items-start space-y-5">
        <Text className="font-bold text-lg font-com">
          Group Name: {groupName}
        </Text>
        <Text className="font-com">Owner: {owner}</Text>
        <Text className="font-com">
          Members:{' '}
          <View className="flex flex-col">
            {Array.isArray(member) &&
              member.map((m, index) => (
                <Text key={index} className="font-com pt-4">
                  {m}
                </Text>
              ))}
          </View>
        </Text>
      </View>
      <View className="w-full items-center">
        <TouchableOpacity
          onPress={handleJoinGroup}
          className="bg-purple-200 text-black p-2 w-11/12 rounded-lg">
          <Text className="font-com text-lg text-center">Join</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GroupInfoPage;
