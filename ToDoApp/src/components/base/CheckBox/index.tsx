import Checkbox from "@mui/material/Checkbox";

type CheckBoxProps = {
  checked: boolean;
  onChange: () => void;
};

const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  return (
    <Checkbox
      className="checkBox"
      checked={checked}
      name="done"
      onChange={onChange}
    />
  );
};

export default CheckBox;
