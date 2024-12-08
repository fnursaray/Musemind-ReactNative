import {View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import Input from '../../components/ui/input';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {updateTask} from '../../store/actions/taskActions';
import {useNavigation} from '@react-navigation/native';
import {TASKS} from '../../utils/routes';

const UpdateTask = ({route}) => {
  const task = route.params.task;

  const [title, setTitle] = useState(task.title);
  const [date, setDate] = useState(task.date);
  const [status, setStatus] = useState(task.status);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const data = ['In Progress', 'In Review', 'Complated', 'On Hold'];

  const saveTask = () => {
    const form = {
      id: task.id,
      title: title,
      date: date,
      status: status,
    };
    dispatch(updateTask(form));
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
      <Input
        onChangeText={value => setStatus(value)}
        value={status}
        placeholder="Please set status"
        title="Task Status"
      />
      <Button onPress={() => saveTask()} title="Güncelle" status="warning" />
    </View>
  );
};

export default UpdateTask;
