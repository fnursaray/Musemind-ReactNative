import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addNewTask} from '../../store/actions/taskActions';
import {Select, SelectItem} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {TASKS} from '../../utils/routes';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('8 Aralık 2024');
  const [status, setStatus] = useState('');

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = ['In Progress', 'In Review', 'Complated', 'On Hold'];

  const saveTask = () => {
    const task = {
      id: Date.now(),
      title: title,
      date: date,
      status: status,
    };
    dispatch(addNewTask(task));
    navigation.navigate(TASKS);
  };

  return (
    <View style={defaultScreenStyle.container}>
      <Input
        onChangeText={value => setTitle(value)}
        value={title}
        placeholder="Please set title"
        title="Task Title"
      />
      <Input
        onChangeText={value => setDate(value)}
        value={date}
        placeholder="Please set date"
        title="Task Date"
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: '600',
          marginBottom: -10,
          marginTop: 15,
          marginLeft: 10,
        }}>
        Task Status
      </Text>
      <Select
        selectedIndex={status ? data.indexOf(status) : null}
        onSelect={index => setStatus(data[index.row])}
        value={status || 'Please set status'}
        placeholder="Please set status"
        style={styles.status}>
        {data.map((title, index) => (
          <SelectItem key={index} title={title} />
        ))}
      </Select>

      <Button onPress={saveTask} title="Kaydet" status="success" />
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  status: {
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    paddingVertical: 15,
  },
});
