import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      groupNames: [
        {
          name: 'Group 1',
          description: '11 Members',
          owner: 'ritesh ',
          member: [
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
          ],
        },
        {
          name: 'Group 2',
          description: '11 Members',
          owner: 'ritesh ',
          member: [
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
          ],
        },
        {
          name: 'Group 3',
          description: '11 Members',
          owner: 'ritesh ',
          member: [
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
          ],
        },
        {
          name: 'Group 4',
          description: '11 Members',
          owner: 'ritesh ',
          member: [
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
          ],
        },
        {
          name: 'Group 5',
          description: '11 Members',
          owner: 'ritesh ',
          member: [
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
            'ams',
            'asd',
          ],
        },
      ],
      filteredGroupNames: [], // Initially set to an empty array
    };
  }

  componentDidMount() {
    // Set the initial filtered list to display all group names
    this.setState({
      filteredGroupNames: this.state.groupNames,
    });
  }

  handleOnChangeText = text => {
    const {groupNames} = this.state;
    // Filter the group names based on search text
    const filteredNames = groupNames.filter(group =>
      group.name.toLowerCase().includes(text.toLowerCase()),
    );

    // Set the filtered list
    this.setState({
      searchText: text,
      filteredGroupNames: filteredNames,
    });
  };
  handleClearSearch = () => {
    // Clear the search text and show the default list
    this.setState({
      searchText: '',
      filteredGroupNames: this.state.groupNames,
    });
  };
  handleJoinGroup = groupName => {
    alert(`You joined the group: ${groupName}`);
    // You can implement the logic to join the group here
  };

  renderGroupItem = ({item}) => {
    return (
      <View className="p-3 w-full">
        <Text className="font-bold text-lg font-com">{item.name}</Text>
        <Text className="font-com">{item.description}</Text>
        <View className="flex flex-row justify-end">
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('GroupInfoPage', {
                groupName: item.name,
                owner: item.owner,
                description: item.description,
                member: item.member,
              })
            }
            className="bg-purple-100 p-2 flex px-6 flex-col -mt-8 rounded-md">
            <Text className="font-extrabold font-com">Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  render() {
    const {searchText, filteredGroupNames} = this.state;
    const searchMade = searchText !== ''; // Check if search text is not empty

    return (
      <View className="h-full bg-white font-com p-4">
        <View className="-mx-4 shadow">
          <SearchBar
            className="h-12"
            fontSize={15}
            fontColor="#fdfdfd"
            iconColor="#fdfdfd"
            placeholder="Search"
            onClearPress={this.handleClearSearch}
            clearIconImageStyle={{
              padding: 8,
            }}
            onChangeText={this.handleOnChangeText}
            value={searchText}
          />
        </View>
        <Text className="font-com mt-4 p-2 font-extrabold text-xl">
          {searchMade ? 'Founded Groups' : 'Groups'}
        </Text>
        <FlatList
          data={
            searchMade ? filteredGroupNames : filteredGroupNames.slice(0, 10)
          }
          renderItem={this.renderGroupItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
