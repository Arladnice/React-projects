import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites";

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [items, setItems] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartItems, setcartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .get("https://623485d1debd056201e74d2f.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://623485d1debd056201e74d2f.mockapi.io/cart")
      .then((res) => {
        setcartItems(res.data);
      });
    axios
      .get("https://623485d1debd056201e74d2f.mockapi.io/favorites")
      .then((res) => {
        setFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://623485d1debd056201e74d2f.mockapi.io/cart", obj);
    setcartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://623485d1debd056201e74d2f.mockapi.io/cart/${id}`);
    setcartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post("https://623485d1debd056201e74d2f.mockapi.io/favorites", obj);
    setFavorites((prev) => [...prev, obj]);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const clearValue = () => {
    setSearchValue("");
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              searchValue={searchValue}
              clearValue={clearValue}
              onChangeSearchInput={onChangeSearchInput}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route path="/favorites" element={<Favorites items={favorites} />} />
      </Routes>
    </div>
  );
}

export default App;
