import styled from "styled-components";
import Image from './Image'

// import image1 from "/Proyectos React/temp_services/tempser/src/public1/images/join.svg";
import DonutQuantity from "./DonutQuantity";
import TimeQuantity from './Timequantity';

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

const Timestartcontrol = ({titulo2,defaultnumber,img1, onAdd_1, onRemove_2, numDonuts_3,onAdd_4, onRemove_5, numDonuts_6 }) => {
  return (
    <Shop>
      <ShopName>{titulo2}</ShopName>
      <Image src={img1} width="150px" height="100px" ></Image>
      <Controls>
        <TimeQuantity
          onAdd={onAdd_1}
          onRemove={onRemove_2}
          quantity={numDonuts_3}
          onAdd2={onAdd_4}
          onRemove2={onRemove_5}
          quantity2={numDonuts_6}

        />


      </Controls>
    </Shop>
  );
};

export default Timestartcontrol;