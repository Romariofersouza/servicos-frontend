import { forwardRef, useImperativeHandle, useState } from "react";
import { RadioGroup } from "@material-ui/core";

const MyRadioGroup = forwardRef((props, ref) => {
  const { defaultValue } = props;

  const [value, setValue] = useState(defaultValue || "");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const getValue = () => {
    return value;
  };

  useImperativeHandle(ref, () => ({
    setValue,
    getValue,
  }));

  return (
    <RadioGroup {...props} value={value} onChange={handleChange}>
      {props.children}
    </RadioGroup>
  );
});

export default MyRadioGroup;
