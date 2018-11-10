import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import HintsList from './HintsList';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexGrow: 1,
  },
  display: {
    flexGrow: 1,
    padding: 16,
    marginTop: StatusBar.currentHeight,
  }
});

const Display = ({ text, hints, activeHintIndex, onEndClick }) => (
  <View style={styles.wrapper}>
    <View style={styles.display}>
      <Text>{text}</Text>
    </View>
    <HintsList hints={hints} activeHintIndex={activeHintIndex} onEndClick={onEndClick} />
  </View>
);

Display.propTypes = {
  text: PropTypes.string.isRequired,
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number.isRequired,
  onEndClick: PropTypes.func.isRequired,
}

export default Display;