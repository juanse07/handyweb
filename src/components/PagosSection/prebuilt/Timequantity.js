import styled from "styled-components";

const Input = styled.input`
  width: 80px;
  padding: 0 12px;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  
  text-align: center;
  outline: none;
  background: transparent;
  border: 1px solid #01BF71;
  color: #111;
  height: 40px;
  user-select: none;
`;

const Button = styled.span`
  display: inline-block;
  width: 30px;
  line-height: 38px;
  color: #fff;
  height: 40px;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  background-color: #01BF71;
  user-select: none;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #01BF71;
`;

const DecrementButton = styled(Button)`
  border-right: none;
  border-radius: 4px 0 0 4px;
`;

const IncrementButton = styled(Button)`
  border-left: none;
  border-radius: 0 4px 4px 0;
`;

const TimeQuantity = ({ onAdd, onRemove, quantity,onAdd2, onRemove2, quantity2 }) => {
  return (
    <>
      <DecrementButton onClick={onRemove}>–</DecrementButton>
      <Input type="text" value={quantity} readOnly />
      <IncrementButton onClick={onAdd}>+</IncrementButton>
      <DecrementButton onClick={onRemove2}>–</DecrementButton>
      <Input type="text" value={quantity2} readOnly />
      <IncrementButton onClick={onAdd2}>+</IncrementButton>
    </>
  );
};



export default TimeQuantity;
