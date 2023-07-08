import { useContext } from "react";
import ColorContext from "../../context/colorContext";

const HelloMessage = () => {
  const { color, name } = useContext(ColorContext);
  return <h1 className={color}>Hello {name}!!</h1>;
};

export default HelloMessage;
