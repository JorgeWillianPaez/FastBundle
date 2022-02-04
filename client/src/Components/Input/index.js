import { InputContainer } from "./styles";

const Input = ({ placeholder, type, ...rest }) => {
  return (
    <InputContainer placeholder={placeholder} type={type} {...rest} />
  )
};

export default Input;