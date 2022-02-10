// import Head from "next/head";
import styled from "styled-components";
// import GlobalStyles from "./prebuilt/GlobalStyles";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Learning
// To best leverage Stripe’s advanced fraud functionality,
// include this script on every page, not just the checkout page.
// This allows Stripe to detect anomalous behavior that may be indicative
// of fraud as customers browse your website.
// Note: This is why we are adding it to a Layout component.

const stripePromise = loadStripe("pk_live_51Ji1ywFheOTrxlzROgjktCsbIRjSySwbZBDlYuLDNNe4HvLNj49mXshrh5fnfzYIA3ynPK5Jyv6JAJDMwQTzG9tk00tqU6f2oL");//falta poner en env.

// TIP
// call loadStripe outside of a component
// in that way there's no chance it will get
// called more times than it needs to

const Layout = ({ children, title }) => {
  return (
    <>
     
      
        
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        {/* <p > HandyJuan secure payments portal powered by Stripe </p> */}
      
      <Elements stripe={stripePromise}>{children}</Elements>
    </>
  );
};

export default Layout;