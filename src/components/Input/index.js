import React from "react";

const Input = (props) => (
  <>
    <label className="is-hidden" htmlFor={props.id}>
      {props.label}
    </label>
    <input
      maxLength={props.maxLength}
      name={props.name}
      type={props.type}
      id={props.id}
      value={props.value}
      placeholder={props.placeholder}
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
  </>
);

export default Input;
