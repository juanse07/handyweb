import FormField from "./FormField";

import FormFieldSelect from "./FormFieldSelect";
import FormFieldSelectst from "./FormFieldSelectst";



const BillingDetailsFields = () => {
  return (
    <>
      <FormField
        name="name"
        label="Name"
        type="text"
        placeholder="Jane Doe"
        required
      />
      <FormField
        name="email"
        label="Email"
        type="email"
        placeholder="jane.doe@example.com"
        required
      />
       <FormField
        name="phone number"
        label="Phone"
        type="phone"
        placeholder="7209876543"
        required
      />
      <FormField
        name="address"
        label="Address"
        type="text"
        placeholder="1234 Cherry Berry St."
        required
      />
      <FormField
        name="state"
        label="State"
        type="text"
        placeholder="Colorado"
        required
      />
      <FormField
        name="city"
        label="City"
        type="text"
        placeholder="Littleton"
        required>
        </FormField>


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
      
      
      
     
      <FormField
        name="zip"
        label="ZIP"
        type="text"
        placeholder="80209"
        required
      />
    </>
  );
};

export default BillingDetailsFields;