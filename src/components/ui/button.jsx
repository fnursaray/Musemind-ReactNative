import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import ThemeColors from '../../theme/colors';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'success':
        return ThemeColors.pink;
      case 'warning':
        return ThemeColors.yellow;
      case 'danger':
        return ThemeColors.red;
      default:
        return ThemeColors.purple;
    }
  };

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 8,
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
  },
});

export default Button;
