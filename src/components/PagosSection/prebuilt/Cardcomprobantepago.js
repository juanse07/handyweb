import Cardcomprobante1 from "./Cardcomprobante1";
import { useSelector } from "react-redux";




const Cardcomprobantepago = () => {
 

  const name1= useSelector((state) => state.user.name);
  const lname1=useSelector((state) => state.user.lname);
  const email1=useSelector((state) => state.user.email);
  const phone1=useSelector((state) => state.user.phone);
  const address1=useSelector((state) => state.user.address);
  const numDonuts1=useSelector((state) =>state.user.numDonuts);
  const numDonuts2=useSelector((state) =>state.user.numDonuts2);
  const numDonuts3=useSelector((state) =>state.user.numDonuts3);
  const numDonuts4=useSelector((state) =>state.user.numDonuts4);
  const date1=useSelector((state) =>state.user.date1);
  const nombrecompleto =`${name1} ${lname1}`
  const fulltime=`${numDonuts3} : ${numDonuts4} hh:mm`

 

  
  


    return (
      <>
        <Cardcomprobante1
          name="name"
          label="Name"
          type="text"
          placeholder="Jane Doe"
          value={nombrecompleto}
          required
        />

<Cardcomprobante1
          name="email"
          label="Email"
          type="text"
          placeholder="Colorado"
          value={email1}
          required
        /> 
        <Cardcomprobante1
          name="email"
          label="Required Time"
          type="email"
          placeholder="jane.doe@example.com"
          value={numDonuts1}
          required
        />
         <Cardcomprobante1
          name="phone number"
          label="Phone"
          type="phone"
          placeholder="7209876543"
          value={phone1}
          required
        />
        <Cardcomprobante1
          name="address"
          label="Address"
          type="text"
          placeholder="1234 Cherry Berry St."
          value={address1}
          required
        />
        <Cardcomprobante1
          name="starting time"
          label="Starting time"
          type="text"
          placeholder="Colorado"
          value={fulltime}
          required
        />
          <Cardcomprobante1
          name="starting time"
          label="Date"
          type="text"
          placeholder="Colorado"
          value={date1}
          required
        /> 
         <Cardcomprobante1
          name="How many pets?"
          label="How Many pets?"
          type="text"
          placeholder="Colorado"
          value={numDonuts2}
          required
        /> 
   
  
  {/* <FormFieldSelectst
          name="state"
          label="State"
          type="text"
          placeholder="Colorado"
          required
        />
        <FormFieldSelect
          name="city"
          label="City"
          type="text"
          placeholder="Littleton"
          required>
          </FormFieldSelect> */}
        
        
        
{/*        
        <Cardcomprobante1
          name="zip"
          label="ZIP"
          type="text"
          placeholder="80209"
          required
        /> */}
      </>
    );
  };
  
  export default Cardcomprobantepago;