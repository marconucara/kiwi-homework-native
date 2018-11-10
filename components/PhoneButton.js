import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const styles = StyleSheet.create({
  item: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexBasis: '33%',
    paddingVertical: 5,
    backgroundColor: '#f1f1f1',
    marginTop: '0.5%',
  },

  text: {
    textAlign: 'center',
  },

  hint: {
    textAlign: 'center',
    fontSize: 10,
  }
});

const PhoneButton = ({ children, hint, onClick }) => (
  <TouchableOpacity onPress={onClick} style={styles.item}>
    <View>
      <Text style={styles.text}>{children}</Text>
      {hint &&
        <Text style={styles.hint}>{hint}</Text>}
    </View>
  </TouchableOpacity>
);

PhoneButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  hint: PropTypes.string,
}

export default PhoneButton;