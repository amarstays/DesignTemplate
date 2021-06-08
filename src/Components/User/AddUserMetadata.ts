import { formElement } from "../../Views/Dashboard/FormGenerator";

export const addUserMetadata: formElement[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    variant: "outlined",
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    variant: "outlined",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    variant: "outlined",
  },
];
