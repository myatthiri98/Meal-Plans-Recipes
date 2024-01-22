import { Pressable, StyleSheet, Image } from 'react-native';
import React from 'react';

const IconButton = ({ imageSource, color, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Image source={imageSource} style={{ width: 24, height: 24, tintColor: color }} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export default IconButton;
