import {ScrollView, StyleSheet, View} from 'react-native';
import SectionTitle from '../../components/ui/sectionTitle';
import TasksStatusCard from '../../components/dashboard/tasksStatusCard';
import {useSelector} from 'react-redux';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {VictoryPie, VictoryTheme} from 'victory-native';
import {statusTypes} from '../../utils/constants';

const Dashboard = () => {
  const {taskStatus, tasks} = useSelector(state => state?.tasks);

  // taskları statuslerine göre say
  const countTaskStatus = status => {
    return tasks.filter(item => item?.status === status).length;
  };

  // taskların yüzdeliklerini hesapla
  const calculateTaskStatus = status => {
    const totalTask = tasks.length;
    const taskCount = countTaskStatus(status);
    const percentage = ((taskCount / totalTask) * 100).toFixed(1);

    if (percentage > 0) {
      return `${percentage}% `;
    } else {
      return '0% ';
    }
  };

  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView>
        <SectionTitle title={'Project Summary'} />
        <View style={styles.tasksStatusCard}>
          {taskStatus.map(item => (
            <TasksStatusCard
              value={countTaskStatus(item.status)}
              item={item}
              key={item.id}
            />
          ))}
        </View>
        <SectionTitle title={'Project Statistics'} />
        <View
          style={{
            marginTop: -25,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <VictoryPie
            innerRadius={60}
            padAngle={2}
            width={380}
            height={380}
            data={[
              {x: 'In Review', y: calculateTaskStatus(statusTypes.INREVIEW)},
              {x: 'Complated', y: calculateTaskStatus(statusTypes.COMPLATED)},
              {x: 'On Hold', y: calculateTaskStatus(statusTypes.ONHOLD)},
              {
                x: 'In Progress',
                y: calculateTaskStatus(statusTypes.INPROGRESS),
              },
            ]}
            theme={VictoryTheme.clean}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  tasksStatusCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
