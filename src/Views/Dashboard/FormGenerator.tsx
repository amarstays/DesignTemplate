import { useEffect, useState } from "react";
import { MenuItem, TextField } from "@material-ui/core";
import { uploadFile } from "../../utils/actions";

export type formElement = {
  label: string;
  name: string;
  type: string;
  variant: string;
  placeholder?: string;
  validation?: any;
  fieldProps?: any;
  options?: any[];
};

interface FormGeneratorProps {
  metadata: formElement[];
  getFormData: (formData: any) => void;
}

const FormGenerator = ({ metadata, getFormData }: FormGeneratorProps) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    getFormData(formData);
  }, [formData, getFormData]);

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileUpload = async (e: any) => {
    const name = e.target.name;
    const response: any = await uploadFile(e.target.files[0]);

    if (response?.data?.url) {
      setFormData({
        ...formData,
        [name]: response.data.url,
      });
    }
  };

  return (
    <form className="modal-form">
      {metadata.map((formElement: formElement, index: number) => {
        return (
          <TextField
            key={index}
            name={formElement.name}
            type={formElement.type}
            label={formElement.label}
            placeholder={formElement.placeholder}
            variant={formElement.variant}
            onChange={
              formElement.type === "file" ? handleFileUpload : handleChange
            }
            {...formElement.fieldProps}
          >
            {formElement?.fieldProps?.select &&
              formElement.options?.map((option: any, index: number) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
          </TextField>
        );
      })}
    </form>
  );
};

export default FormGenerator;
