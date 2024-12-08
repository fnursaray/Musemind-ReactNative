import ThemeColors from '../../theme/colors';
import {ADDTASK, DELETETASK, UPDATETASK} from '../types/tasksTypes';

const initialState = {
  tasks: [],
  taskStatus: [
    {
      id: '1',
      status: 'In Progress',
      value: 0,
      color: ThemeColors.yellow,
    },
    {
      id: '2',
      status: 'In Review',
      value: 0,
      color: ThemeColors.darkblue,
    },

    {
      id: '3',
      status: 'On Hold',
      value: 0,
      color: ThemeColors.green,
    },
    {
      id: '4',
      status: 'Complated',
      value: 0,
      color: ThemeColors.blue,
    },
  ],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case DELETETASK:
      return {
        ...state,
        tasks: state?.tasks?.filter(task => task.id != action.payload),
      };

    case UPDATETASK:
      return {
        ...state,
        tasks: state?.tasks?.map(task =>
          task.id === action.payload.id ? action.payload : task,
        ),
      };

    default:
      return state;
  }
};

export default tasksReducer;
