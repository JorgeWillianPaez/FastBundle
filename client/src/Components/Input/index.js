import { InputContainer } from "./styles";

const Input = ({ placeholder, type, name, register, error, ...rest }) => {
  return (
    <InputContainer>
      <input placeholder={placeholder} {...register(name)} type={type} {...rest} />
      <div className="inputErrors">{!!error && <span>{error}!</span>}</div>
    </InputContainer>
  )
};

export default Input;