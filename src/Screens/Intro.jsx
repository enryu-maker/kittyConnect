import {View, Text, Image, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Dimensions} from 'react-native';

const Intro = () => {
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
  const buttonlable = lable => {
    return (
      <View className="m-auto w-full flex h-full flex-row rounded-xl">
        <Text className="m-auto -mt-10 bg-purple-500 p-2 py-3 px-36 font-com font-bold">
          {lable}
        </Text>
      </View>
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
        activeDotStyle={{backgroundColor: 'red', width: 30}}
        renderNextButton={() => buttonlable('Next')}
        renderSkipButton={() => buttonlable('Skip')}
        renderDoneButton={() => buttonlable('Done')}
        onDone={() => {
          setShowHomePage(true);
        }}
      />
    );
  }
  return (
    <View>
      <Text>Intro</Text>
    </View>
  );
};

export default Intro;
