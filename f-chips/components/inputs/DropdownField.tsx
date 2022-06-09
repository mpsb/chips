import { NextPage } from "next";
import { ChangeEventHandler } from "react";

type SelectOption = {
  value: string;
  label: string;
  iconUrl?: string;
};

type SelectProps = {
  dropdownOptions: Array<SelectOption>;
  handleChange?: ChangeEventHandler;
  value?: string | number;
  additionalProps?: string;
};

const DropdownField: NextPage<SelectProps> = (props) => {
  return (
    <select
      className={`border-solid border border-quarter-black rounded-[20px] px-[8px] py-[6px] text-[14px] focus:outline-half-black transition-colors ease-in-out hover:border-half-black duration-300 ${props.additionalProps}`}
      onChange={props.handleChange}
      value={props.value}
    >
      {props.dropdownOptions.map((e) => (
        <option key={`${e.value}-option`} value={e.value}>
          {e.label}
        </option>
      ))}
    </select>
  );
};

export default DropdownField;
