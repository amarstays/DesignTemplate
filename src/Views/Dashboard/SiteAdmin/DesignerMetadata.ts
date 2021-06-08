import { formElement } from "../FormGenerator";

export const designerForm: formElement[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    variant: "outlined",
  },
  {
    label: "Details",
    name: "details",
    type: "text",
    variant: "outlined",
    fieldProps: {
      multiline: true,
      rows: 4,
      rowsMax: 5,
    },
  },
  {
    label: "Role",
    name: "role",
    type: "text",
    variant: "outlined",
  },
  {
    label: "",
    name: "image",
    type: "file",
    variant: "outlined",
    fieldProps: {
      accept: "image/*",
    },
  },
];
