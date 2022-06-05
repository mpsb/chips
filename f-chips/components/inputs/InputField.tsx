import { NextPage } from "next";

type InputNumberProps = {
  type: "number";
  min?: string;
  max?: string;
};

type InputProps = {
  placeholder: string;
} & InputNumberProps;

const TextField: NextPage<InputProps> = (props) => {
  return (
    <input
      type={props.type}
      className="border-solid border border-quarter-black rounded-[20px] px-[8px] py-[4px] text-[14px] focus:outline-half-black transition-colors ease-in-out hover:border-half-black duration-300"
      placeholder={props.placeholder}
      min={props.min}
      max={props.max}
    />
  );
};

export default TextField;
