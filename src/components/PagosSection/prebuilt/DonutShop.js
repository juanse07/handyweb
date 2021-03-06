import styled from "styled-components";
import Image from './Image'

// import image1 from "/Proyectos React/temp_services/tempser/src/public1/images/join.svg";
import DonutQuantity from "./DonutQuantity";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #111;
  font-style: bold;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DonutShop = ({titulo2,defaultnumber,img1, onAddDonut, onRemoveDonut, numDonuts }) => {
  return (
    <Shop>
      <ShopName>{titulo2}</ShopName>
      <Image src={img1} width="150px" height="100px" ></Image>
      <Controls>
        <DonutQuantity
          onAdd={onAddDonut}
          onRemove={onRemoveDonut}
          quantity={numDonuts}
        />
      </Controls>
    </Shop>
  );
};

export default DonutShop;