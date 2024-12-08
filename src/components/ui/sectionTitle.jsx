import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SectionTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SectionTitle;
