import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const FavoriteButton = ({ isFavorite, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={{ fontSize: 20, color: isFavorite ? 'red' : 'gray' }}>
      {isFavorite ? '♥' : '♡'}
    </Text>
  </TouchableOpacity>
);

export default FavoriteButton;
