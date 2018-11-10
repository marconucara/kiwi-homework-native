import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

import Display from './Display';
import Keyboard from './Keyboard';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
  },

  error: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },

  errorText: {
    color: '#ffffff',
  },
});

const Phone = ({
  text,
  hints,
  activeHintIndex,
  onNumberClick,
  onEndClick,
  onToggleClick,
  onDeleteClick,
  errorMessage,
}) => (
  <View style={styles.wrapper}>
    <Display
      text={text}
      hints={hints}
      activeHintIndex={activeHintIndex}
      onEndClick={onEndClick}
    />
    <Keyboard 
      onNumberClick={onNumberClick}
      onEndClick={onEndClick}
      onToggleClick={onToggleClick}
      onDeleteClick={onDeleteClick}
    />
    
    <View 
      style={{
        ...styles.error,
        opacity: errorMessage ? 1 : 0,
      }}
      pointerEvents={errorMessage ? 'auto' : 'none'}
    >
      <Text style={styles.errorText}>
        {errorMessage}
        Please check readme.md and refresh
      </Text>
    </View>
  </View>
);

Phone.propTypes = {
  text: PropTypes.string.isRequired,
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number.isRequired,
  onNumberClick: PropTypes.func.isRequired,
  onEndClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Phone;