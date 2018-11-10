
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',

  },

  hint: {
    padding: 5,
  }
});


const HintList = ({ hints, activeHintIndex, onEndClick }) => (
  <View style={styles.wrapper}>
    {hints.map((hint, index) => (
      <TouchableOpacity 
        style={{
          ...styles.hint,
          backgroundColor: index === activeHintIndex ? 'rgb(0, 169, 145)' : '#f1f1f1',
          
        }}
        key={hint}
        onPress={() => onEndClick(index)}
      >
        <Text style={{
          color: index === activeHintIndex ? '#ffffff' : '#000000',
        }}>{hint}</Text>
      </TouchableOpacity>
    ))}
  </View>
);


HintList.propTypes = {
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number,
}

export default HintList;