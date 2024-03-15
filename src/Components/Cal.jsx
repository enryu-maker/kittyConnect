import {DatePicker} from 'calendar-date-picker-react-native';

export default function Cal() {
  const [picker, setPicker] = useState(false);

  const [date, setdate] = useState('');
  const [dates, setdates] = useState([]);

  const showPicker = () => {
    setPicker(true);
  };
  const hidePicker = () => {
    setPicker(false);
  };

  return (
    <View>
      <Text>{date}</Text>
      <DatePicker
        mode="single"
        visible={picker}
        onConfirm={showPicker}
        onCancel={hidePicker}
        type="modal"
        onChnage={e => setdates(e)}
        current={'2023-03-01'}
        minDate={'2022-03-01'}
        maxDate={'2025-03-01'}
        showSixWeeks={true}
        showLeftArrow={false}
        showRightArrow={false}
        style={{
          leftArrow: {tintColor: 'black'},
          title: {backgroundColor: 'red'},
        }}
        hideArrows={false}
        showTitle={true}
      />
      {dates.map((item, index) => {
        return <Text key={index}>{item}</Text>;
      })}
      <DatePicker mode="rangePicker" type="view" onChnage={e => setdate(e)} />
    </View>
  );
}
