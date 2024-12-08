import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import ThemeColors from '../../theme/colors';
import {Calendar1, Edit, Trash} from 'iconsax-react-native';
import {setColor} from '../../utils/functions';
import {useDispatch} from 'react-redux';
import {deleteTask} from '../../store/actions/taskActions';
import {useNavigation} from '@react-navigation/native';
import {UPDATETASK} from '../../utils/routes';

const TaskItem = ({item}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const deleteItem = () => {
    Alert.alert('Warning', 'Kayıt silinecek.Emin misiniz?', [
      {
        text: 'Sil',
        onPress: () => dispatch(deleteTask(item.id)),
      },
      {
        text: 'Vazgeç',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'space-around'}}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <View
            style={{
              backgroundColor: setColor(item.status),
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              paddingVertical: 8,
              borderRadius: 100,
            }}>
            <Text style={{color: ThemeColors.white, fontWeight: 500}}>
              {item.status}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Calendar1 size={20} color={ThemeColors.black} variant="Outline" />
          <Text style={styles.date}>{item.date}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginHorizontal: 10}} onPress={deleteItem}>
          <Trash size={25} color={ThemeColors.black} variant="Outline" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(UPDATETASK, {task: item})}>
          <Edit size={25} color={ThemeColors.black} variant="Outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.7,
    borderRadius: 8,
    borderColor: ThemeColors.black,
    marginVertical: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 140,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
  date: {
    fontSize: 16,
  },
});

export default TaskItem;
