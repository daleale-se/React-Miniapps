import * as React from "react";
import "./styles.css";

// Use React.Children.map and React.cloneElement to clone the children
// and pass the correct props to each RadioOption

export const RadioGroup = ({ onChange, selected, children }) => {
  const RadioOptions = React.Children.map(children, (child) => {
    const checked = selected === child.props.value;
    return React.cloneElement(child, { checked, onChange });
  });
  return <div className="RadioGroup">{RadioOptions}</div>;
};

// Hook up the onChange handler to call the onChange prop passed to RadioGroup
// Also, make sure to pass the correct checked prop to the input element
export const RadioOption = ({ value, checked, onChange, children }) => {
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};
