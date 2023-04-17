import { FormGroup, InputLabel, Select } from "./styles";
import { SelectInputProps } from "./types";
const SelectInput: React.FC<SelectInputProps> = ({
  label,
  defaultOption,
  options,
}) => {
  return (
    <FormGroup>
      <InputLabel>{label}</InputLabel>
      <Select>
        <option>{defaultOption}</option>
        {options?.map((option) => (
          <option>{option.title}</option>
        ))}
      </Select>
    </FormGroup>
  );
};

export default SelectInput;
