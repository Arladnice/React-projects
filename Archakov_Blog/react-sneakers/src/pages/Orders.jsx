import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://623485d1debd056201e74d2f.mockapi.io/orders"
      );
			setOrders({data})
      console.log(orders);
    })();
  }, []);
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {[].map((item, index) => (
          <Card key={index} favorited={true} addToFavorite={""} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
