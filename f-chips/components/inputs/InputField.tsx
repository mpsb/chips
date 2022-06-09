import { NextPage } from "next";
import { ChangeEventHandler } from "react";

type InputNumberProps = {
  type: "number";
  min?: string;
  max?: string;
};

type InputProps = {
  placeholder: string;
  handleChange?: ChangeEventHandler;
  value?: string | number;
  additionalProps?: string;
} & InputNumberProps;

const TextField: NextPage<InputProps> = (props) => {
  return (
    <input
      type={props.type}
      className={`inline-block border-solid border border-quarter-black rounded-[20px] px-[8px] py-[4px] w-[105px] text-[14px] focus:outline-half-black transition-colors ease-in-out hover:border-half-black duration-300 ${props.additionalProps}`}
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
      onChange={props.handleChange}
      value={props.value}
    />
  );
};

export default TextField;
