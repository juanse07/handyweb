import { useState } from "react";
// import {Router as Router} from "react-router-dom";

import Layout from "../Pagoform";
import Row from "../prebuilt/Row";
// import DonutShop from "../prebuilt/DonutShop";
import CheckoutForm from "../index";
// import getDonutPrice from "./getprice";

const MainPage = props => {
  const [numDonuts, setNumDonuts] = useState(1);

  // const addDonut = () => setNumDonuts(num => Math.min(12, num + 1));
  // const remDonut = () => setNumDonuts(num => Math.max(1, num - 1));

  return (
    <Layout >
     
      <CheckoutForm
       
      />
    </Layout>
  );
};

export default MainPage;