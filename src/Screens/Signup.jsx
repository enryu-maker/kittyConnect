import {View, Text, Button, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Dimensions} from 'react-native';
function Signup({navigation}) {
  const items = [
    {
      id: 1,
      title: 'Welcome To Kitty',
      dec: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium delectus vitae earum cupiditate, labore suscipit est excepturi repellendus. Maxime, illum sapiente inventore molestias dolor totam porro dolore modi exercitationem',
      image: require('../images/img1.jpg'),
    },
    {
      id: 2,
      title: 'Welcome Kitty',
      dec: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium delectus vitae earum cupiditate, labore suscipit est excepturi repellendus. Maxime, illum sapiente inventore molestias dolor totam porro dolore modi exercitationem',
      image: require('../images/doodle_2.jpg'),
    },
    {
      id: 3,
      title: 'Welcome Kitty',
      dec: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis accusantium delectus vitae earum cupiditate, labore suscipit est excepturi repellendus. Maxime, illum sapiente inventore molestias dolor totam porro dolore modi exercitationem',
      image: require('../images/5536890.jpg'),
    },
  ];
  const [showHomePage, setShowHomePage] = useState(false);
  const {width, height} = Dimensions.get('screen');
  // const buttonlable = lable => {
  //   return (
  //     <View className="m-auto w-full flex h-full flex-row rounded-xl">
  //       <Text className="m-auto -mt-10 bg-purple-500 p-2 py-3 px-36 font-com font-bold">
  //         {lable}
  //       </Text>
  //     </View>
  //   );
  // };
  const buttonlable = lable => {
    return (
      <TouchableOpacity className="m-auto flex w-full ">
        <Text className="font-bold ">{lable}</Text>
      </TouchableOpacity>
    );
  };
  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={items}
        renderItem={({item}) => {
          return (
            <View className="items-center">
              <Image
                source={item.image}
                resizeMode="stretch"
                className="w-full h-1/2"></Image>
              <View className="pt-2">
                <Text className="p-2 font-com font-bold text-2xl text-center">
                  {item.title}
                </Text>
                <Text>{item.dec}</Text>
              </View>
            </View>
          );
        }}
        activeDotStyle={{backgroundColor: 'purple', width: 30}}
        renderNextButton={() => buttonlable('Next')}
        renderSkipButton={() => buttonlable('Skip')}
        renderDoneButton={() => buttonlable('Done')}
        showSkipButton
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }
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
