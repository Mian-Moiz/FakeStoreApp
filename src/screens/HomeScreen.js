import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchProducts } from '../api/productsApi';
import { getFavorites, saveFavorites } from '../utils/storage';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const [data, favs] = await Promise.all([fetchProducts(), getFavorites()]);
    setProducts(data);
    setFavorites(favs);
    setLoading(false);
  };

  const toggleFavorite = async (item) => {
    const updated = favorites.some(f => f.id === item.id)
      ? favorites.filter(f => f.id !== item.id)
      : [...favorites, item];
    setFavorites(updated);
    await saveFavorites(updated);
  };

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search?.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#ff5c5c" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar value={search} onChange={setSearch} />
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            item={item}
            isFavorite={favorites.some(f => f.id === item.id)}
            onFavorite={() => toggleFavorite(item)}
            onPress={() => navigation.navigate('ProductDetails', { item })}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, backgroundColor: '#f5f6fa' },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default HomeScreen;
