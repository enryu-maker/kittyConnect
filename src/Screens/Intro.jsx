import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
const Intro = () => {
  const items = [
    {
      id: 1,
      title: 'Welcome Kitty',
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
  const buttonlable = lable => {
    return (
      <View>
        <Text>{lable}</Text>
      </View>
    );
  };
  if (!showHomePage) {
    return (
      <AppIntroSlider
        data={items}
        renderItem={({item}) => {
          return (
            <View className="-mt-32">
              <Image
                source={item.image}
                resizeMode="contain"
                className="w-full m-auto justify-start align-top"></Image>
              <Text>{item.title}</Text>
              <Text>{item.dec}</Text>
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
