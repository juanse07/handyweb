import { useState } from "react";
// import Router from "next/router";

// import Layout from "../components/Layout";
import Row from "../PagosSection/prebuilt/Row";
import DonutShop from "../PagosSection/prebuilt/DonutShop";
// import CheckoutForm from "../components/CheckoutForm";
// import getDonutPrice from "../utils/get-donut-price";
// import getDonutPrice from "./getprice";

const Cart = props => {
  const [numDonuts, setNumDonuts] = useState(1);

  const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return (
    // <Layout title="Select the service you are requiring">
      <Row>
        <DonutShop
        // price={getDonutPrice(numDonuts)}
          onAddDonut={addDonut}
          onRemoveDonut={remDonut}
          numDonuts={numDonuts}
        />
      </Row>
      /* <CheckoutForm
        price={getDonutPrice(numDonuts)}
        onSuccessfulCheckout={() => Router.push("/success")}
      /> */
    // </Layout>
  );
};

export default Cart;