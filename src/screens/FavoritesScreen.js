import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import { getFavorites, saveFavorites } from '../utils/storage';
import ProductCard from '../components/ProductCard';
import { SafeAreaView } from 'react-native-safe-area-context';

const FavoritesScreen = ({ navigation }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', loadFavorites);
    return unsubscribe;
  }, [navigation]);

  const loadFavorites = async () => {
    const favs = await getFavorites();
    setFavorites(favs);
  };

  const removeFavorite = async item => {
    const updated = favorites.filter(f => f.id !== item.id);
    setFavorites(updated);
    await saveFavorites(updated);
  };

  if (favorites.length === 0)
    return (
      <View style={styles.center}>
        <Text style={styles.emptyText}>No favorites yet ❤️</Text>
      </View>
    );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Your Favorites</Text>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            isFavorite={true}
            onFavorite={() => removeFavorite(item)}
            onPress={() => navigation.navigate('ProductDetails', { item })}
          />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f6fa' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText: { color: '#888', fontSize: 16 },
  header: {
    marginBottom: 25,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default FavoritesScreen;
