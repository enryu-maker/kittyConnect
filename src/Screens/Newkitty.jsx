import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-modern-datepicker';
import {getToday, getFormatedDate} from 'react-native-modern-datepicker';

function Newkitty({navigation}) {
  const dropdata = [
    {label: 'Weekly', value: 'Weekly'},
    {label: 'Monthly', value: 'Monthly'},
    {label: 'Yearly', value: 'Yearly'},
    {label: 'Yearly', value: 'Yearly'},
    {label: 'Yearly', value: 'Yearly'},
    {label: 'Yearly', value: 'Yearly'},
    {label: 'Yearly', value: 'Yearly'},
    {label: 'Yearly', value: 'Yearly'},
    {label: 'Yearly', value: 'Yearly'},
  ];
  const [groupName, setGroupName] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');
  const [schedule, setSchedule] = useState('');
  const [submittedValues, setSubmittedValues] = useState([]);
  const [picker, setPicker] = useState(false);
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState('');
  const startdate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    'YYYY/MM/DD',
  );
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  function handleOnPress() {
    setOpen(!open);
  }
  function handleChange(propDate) {
    console.log(propDate);
    setDate(new Date(propDate.date));
  }
  const handleSubmit = () => {
    // Create a new object representing the submitted information
    const newValues = {
      groupName: groupName,
      contributionAmount: contributionAmount,
      schedule: schedule,
    };

    // Add the new object to the submittedValues array
    setSubmittedValues([...submittedValues, newValues]);

    // Clear the form fields after submission
    setGroupName('');
    setContributionAmount('');
    setSchedule('');
  };

  return (
    <View className="bg-white h-full p-4">
      <Text className="text-center py-2 font-bold text-2xl font-com">
        Create New Kitty
      </Text>
      <Text className="text-start pt-4 font-bold text-lg font-com">
        Group Name
      </Text>
      <TextInput
        keyboardType="default"
        value={groupName}
        onChangeText={setGroupName}
        className="h-10 bg-purple-50 p-2 mb-4 mt-2 border-solid border-[1px] border-purple-400 font-com rounded-lg"
      />
      <Text className="text-start pt-4 font-bold text-lg font-com">
        Contribution Amount
      </Text>
      <View className="flex">
        <TextInput
          value={contributionAmount}
          onChangeText={setContributionAmount}
          placeholder="₹"
          keyboardType="numeric"
          className="h-10 bg-purple-50 p-2 mb-4 mt-2 border-solid border-[1px] border-purple-400 font-com rounded-lg"
        />
      </View>
      <Text className="text-start pt-4 font-bold text-lg font-com">
        Schedule
      </Text>
      <View className="h-10 bg-purple-50 p-4 mb-4 mt-2 border-solid border-[1px] border-purple-400 font-com rounded-lg">
        <RNPickerSelect
          onValueChange={value => setSchedule(value)}
          items={dropdata}
        />
        <TouchableOpacity className="absolute inset-y-0 right-0 m-2">
          <Image
            src="/../images/down.png" // Replace with your icon source
            className="w-6 h-6" // Adjust size of the icon if needed
          />
        </TouchableOpacity>
      </View>
      <View className="flex flex-row">
        <View>
          <Text
            onPress={handleOnPress}
            className="text-start pt-4 font-bold text-lg font-com">
            End Date
          </Text>
          <Text className="text-start font-bold text-md font-com">
            This can be change later
          </Text>
        </View>
        <View className="m-auto pl-20 font-com">
          <Text className="text-right font-com">{selectedDate}</Text>
        </View>
      </View>
      <View className="justify-end m-auto">
        <View>
          <Modal animationType="slide" transparent={true} visible={open}>
            <View className="m-10 ">
              <DatePicker
                mode="calendar"
                minimumDate={startdate}
                onSelectedChange={date => setSelectedDate(date)}
                className="bg-purple-100 rounded-lg mt-24"
              />
              <TouchableOpacity
                onPress={handleOnPress}
                className="bg-purple-400 rounded-lg mt-2">
                <Text className="m-auto p-2 ">Close</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
      <View className="">
        <TouchableOpacity
          onPress={handleSubmit}
          className="text-center p-2 rounded-2xl font-xl items-center  bg-purple-500">
          <Text className="font-medium text-lg font-com text-white">
            Continue
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display submitted values */}
      {submittedValues.length > 0 && (
        <View className="mt-4">
          <Text className="font-bold text-xl font-com">Submitted Values:</Text>
          {submittedValues.map((values, index) => (
            <View key={index} className="mt-2">
              <Text>Group Name: {values.groupName}</Text>
              <Text>Contribution Amount: {values.contributionAmount}</Text>
              <Text>Schedule: {values.schedule}</Text>
              <Text>Date: {selectedDate}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

export default Newkitty;
