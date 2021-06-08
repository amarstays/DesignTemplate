import { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import { uploadToS3 } from "../../utils/actions";

export type formElement = {
  label: string;
  name: string;
  type: string;
  variant: string;
  placeholder?: string;
  validation?: any;
  fieldProps?: any;
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

  const handleFileUpload = (e: any) => {
    uploadToS3(e.target.files[0]);
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
          />
        );
      })}
    </form>
  );
};

export default FormGenerator;
