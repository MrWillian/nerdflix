import React from "react";
import { CustomInput, CustomTextarea } from './styles';

interface Props {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange(event: any): void;
}

const FormField: React.FC<Props> = ({ 
  label, type, name, value, onChange 
}) => {
  return (
    <div>
      <label>
        {type != 'textarea' ? 
          <CustomInput
            type={type}
            value={value}
            name={name}
            placeholder={label}
            onChange={onChange} />
          : 
          <CustomTextarea
            value={value}
            name={name}
            placeholder={label}
            onChange={onChange} />
        }
      </label>
    </div>
  )
}

export default FormField;
