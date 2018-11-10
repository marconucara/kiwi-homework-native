import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const Display = ({ text, hints, activeHintIndex, onEndClick }) => (
  <View>
    {/* <Textarea dangerouslySetInnerHTML={{__html: text.replace(/ /g, '&nbsp;')}}/> */}
    {/* <HintsList hints={hints} activeHintIndex={activeHintIndex} onEndClick={onEndClick} /> */}
  </View>
);

Display.propTypes = {
  text: PropTypes.string.isRequired,
  hints: PropTypes.array.isRequired,
  activeHintIndex: PropTypes.number.isRequired,
  onEndClick: PropTypes.func.isRequired,
}

export default Display;