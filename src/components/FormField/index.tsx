import React from "react";
import { Container, CustomInput, CustomTextarea, Text } from './styles';

interface Props {
  label?: string;
  type?: string;
  name?: string;
  value: string;
  onChange(event: any): void;
}

const FormField: React.FC<Props> = ({ 
  label, type, name, value, onChange 
}) => {
  return (
    <Container>
      <label>
        {type != 'textarea' ? 
          <CustomInput
            type={type}
            value={value}
            name={name}
            onChange={onChange} />
          : 
          <CustomTextarea
            value={value}
            name={name}
            onChange={onChange} />
        }
        <Text>
          {label}
          :
        </Text>
      </label>
    </Container>
  )
}

export default FormField;
