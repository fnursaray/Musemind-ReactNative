import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import {useSelector} from 'react-redux';
import TaskItem from '../../components/tasks/taskItem';
import {ADDTASK} from '../../utils/routes';

const Tasks = ({navigation}) => {
  const {tasks} = useSelector(state => state?.tasks);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListEmptyComponent={
          <Text style={{textAlign: 'center', fontSize: 18}}>
            Henüz bir iş eklenmedi.
          </Text>
        }
        data={tasks}
        renderItem={({item}) => <TaskItem item={item} />}
      />
      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

export default Tasks;
