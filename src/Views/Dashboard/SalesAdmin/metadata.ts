import { tableMetadata } from "../../../Components/TableComponent/columnTypes";
import { projectTypes } from "../../../utils/constants";
import { formElement } from "../FormGenerator";

export const salesGridView: tableMetadata = {
  title: "Sales",
  columns: [
    {
      header: "Name",
      key: "name",
    },
    {
      header: "Email",
      key: "email",
    },
    {
      header: "Project type",
      key: "project_type",
    },
    {
      header: "Message",
      key: "message",
    },
    {
      header: "Status",
      key: "status",
    },
    {
      header: "Phone",
      key: "phone",
      columnActions: {
        call: true,
      },
    },
  ],
};

export const leadForm: formElement[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    variant: "outlined",
    fieldProps: {
      required: true,
    },
  },
  {
    label: "Email",
    name: "email",
    type: "text",
    variant: "outlined",
    fieldProps: {
      required: true,
    },
  },
  {
    label: "Phone",
    name: "phone",
    type: "tel",
    variant: "outlined",
    fieldProps: {
      required: true,
    },
  },
  {
    label: "Project Type",
    name: "project_type",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
      required: true,
    },
    options: projectTypes,
  },
];
