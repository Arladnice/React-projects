import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../components/Card/Card";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
				const { data } = await axios.get(
          "https://623485d1debd056201e74d2f.mockapi.io/orders/"
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
			} catch (error) {
				console.log('Ошибка при запросе заказов')
			}
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(6)] : orders).map((item, index) => (
          <Card
            key={index}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Orders;
