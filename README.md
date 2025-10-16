🛍️ FakeStoreApp

A simple and modern React Native shopping app built using the Fake Store API.
Users can browse products, search by name, view details, and add or remove favorites — all stored locally.
🚀 Features

🏠 Home Screen: Displays products with images, titles, and prices

🔍 Search: Quickly filter products by name

❤️ Favorites: Mark/unmark favorite products (saved with AsyncStorage)

📄 Product Details: View product description and full-size image

🧭 Smooth Navigation: Tab and stack navigation with icons

💾 Local Storage: Favorites persist even after app restarts

📦 Installation
1️⃣ Clone the Repository

git clone https://github.com/Mian-Moiz/FakeStoreApp.git
cd FakeStoreApp

2️⃣ Install Dependencies
npm install

▶️ Running the App
For Android
npx react-native run-android

⚙️ Required Packages

If you face issues, ensure these are installed:
npm install @react-navigation/native
npm install @react-navigation/stack
npm install @react-navigation/bottom-tabs
npm install react-native-gesture-handler
npm install react-native-screens
npm install react-native-safe-area-context
npm install @react-native-async-storage/async-storage
npm install axios
npm install react-native-vector-icons

🧩 Folder Structure
src/
 ├─ api/
 │   └─ productsApi.js        # API call for fetching products
 ├─ components/
 │   ├─ ProductCard.js        # Product item card
 │   └─ SearchBar.js          # Reusable search input
 ├─ screens/
 │   ├─ HomeScreen.js         # Product list + search
 │   ├─ ProductDetailsScreen.js # Full product details
 │   └─ FavoritesScreen.js    # User’s favorite items
 ├─ navigation/
 │   └─ AppNavigator.js       # Tab + Stack navigation setup
 ├─ utils/
 │   └─ storage.js            # AsyncStorage helper
App.js                        # App entry point

🧠 API Used

FakeStore API

A free REST API for testing and prototyping eCommerce apps.

Example Endpoint: https://fakestoreapi.com/products

