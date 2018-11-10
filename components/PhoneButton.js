import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';

const PhoneButton = ({ children, hint, onClick }) => (
  <View>
    <TouchableHighlight onPress={onClick}>
      <View>
        <Text>{children}</Text>
        {hint &&
          <Text>{hint}</Text>}
      </View>
    </TouchableHighlight>
  </View>
);

PhoneButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  hint: PropTypes.string,
}

export default PhoneButton;