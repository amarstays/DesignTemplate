import { formElement } from "../../../Components/FormGenerator";

export const userFormMetadata: formElement[] = [
  {
    title: "Contact Details",
    name: "subtitle",
    variant: "filled",
    label: "tag",
    type: "h5",
  },
  {
    label: "Name",
    name: "name",
    variant: "outlined",
    type: "text",
  },
  {
    label: "Email",
    name: "email",
    variant: "outlined",
    type: "text",
  },
  {
    label: "Phone number",
    name: "phone",
    variant: "outlined",
    type: "text",
  },
  {
    title: "Property Info",
    name: "subtitle",
    variant: "filled",
    label: "tag",
    type: "h5",
  },
  {
    label: "City",
    name: "city",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: [
      "Bangalore",
      "Mumbai",
      "Delhi",
      "Hydrabad",
      "Dehradun",
      "Chandigarh",
      "Hydrabad",
      "Chennai",
      "Coimbatore",
      "Kerala",
      "Goa",
      "Rajkot",
      "Surat",
      "Ahembadad",
      "Kolkata",
      "Ranchi",
      "Patna",
      "Jaipur",
      "Lucknow",
      "Varanasi",
      "Bhopal",
      "Pune",
      "Indore",
      "Shimla",
      "Baroda",
      "Gandhi Nagar",
    ],
  },
  {
    label: "Property type",
    name: "property_type",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: ["2 BHK", "3 BHK", "4 BHK", "5 BHK", "Villa", "Bungalow "],
  },
  {
    label: "New Home Address",
    name: "home_address",
    type: "text",
    variant: "outlined",
    fieldProps: {
      mutiline: "true",
      rows: 4,
      rowsMax: 5,
    },
  },
  {
    label: "Work Description",
    name: "work_description",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: ["Only Design", "Design & Execution", "Only Execution"],
  },
  {
    label: "Budget",
    name: "budget",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: [">10 Lakh", ">30 lakh", ">50 Lakh", ">80 Lakh", ">1 Cr"],
  },
  {
    label: "Possesion Status",
    name: "possesion",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: ["Immediate", "After 3 months", "After 6 months", "After 1 year"],
  },
  {
    label: "Lead Quality",
    name: "lead_quality",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: ["Average", "Good", "Very Good"],
  },
  {
    label: "Preferred Contact Mode",
    name: "contact_mode",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: ["Chat", "Call", "Email"],
  },
  {
    label: "",
    name: "floor_plan",
    type: "file",
    variant: "outlined",
  },
  {
    label: "Status",
    name: "status",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
      required: true,
    },
    options: ["Hot", "Stale", "Active"],
  },
  {
    title: "Meeting Details",
    name: "subtitle",
    variant: "filled",
    label: "tag",
    type: "h5",
  },
  {
    label: "Designer",
    name: "designer",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: "async",
    optionsEntity: "/user/Designer",
    optionKeyName: "name",
  },
  {
    label: "Execution Partner",
    name: "execution_partner",
    type: "text",
    variant: "outlined",
    fieldProps: {
      select: true,
    },
    options: "async",
    optionsEntity: "/user/Execution Partner",
    optionKeyName: "name",
  },
  {
    label: "Date",
    name: "date",
    variant: "outlined",
    type: "date",
    ratio: 4,
  },
  {
    label: "Time",
    name: "time",
    variant: "outlined",
    type: "time",
    ratio: 4,
  },
  {
    label: "Meeting Mode",
    name: "mode",
    variant: "outlined",
    type: "text",
    fieldProps: {
      select: true,
    },
    options: [
      "Virtual Meeting",
      "Site Meeting",
      "Experience Centre",
      "Workshop",
    ],
    ratio: 4,
  },
  {
    title: "Basic Requirements",
    name: "subtitle",
    variant: "filled",
    label: "tag",
    type: "h5",
  },
  {
    label: "Foyer",
    name: "foyer",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Shoerack",
      "False Ceiling",
      "Painting",
      "Wallpaper",
      "Stone Cladding",
    ],
  },
  {
    label: "Kitchen",
    name: "kitchen",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Cabinet",
      "Tall Unit",
      "Painting",
      "Storage on wall",
      "Storage on base",
      "Loft",
    ],
  },
  {
    label: "Dining Room",
    name: "dining",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Crockery Unit",
      "Puja Unit",
      "Dining Set",
      "Stone Cladding",
      "False Ceiling",
      "Wallpaper",
      "Painting",
    ],
  },
  {
    label: "Living Room",
    name: "living",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "TV Unit",
      "Sofa",
      "Coffee Table",
      "Accent Chair",
      "False Ceiling",
      "Wallpaper",
      "Painting",
      "Stone Cladding",
    ],
  },
  {
    label: "Master Bedroom",
    name: "bedroom",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Sliding Wardrobe",
      "Openable Wardrobe",
      "Loft",
      "Dresser Unit",
      "Study Unit",
      "TV Unit",
      "Beds",
      "Side Table",
      "False Ceiling",
      "Wallpaper",
      "Painting",
      "Stone Cladding",
    ],
  },
  {
    label: "Guest Bedroom",
    name: "guest_bedroom",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Sliding Wardrobe",
      "Openable Wardrobe",
      "Loft",
      "Dresser Unit",
      "Study Unit",
      "TV Unit",
      "Beds",
      "Side Table",
      "False Ceiling",
      "Wallpaper",
      "Painting",
      "Stone Cladding",
    ],
  },
  {
    label: "Kids Bedroom",
    name: "kids_bedroom",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Sliding Wardrobe",
      "Openable Wardrobe",
      "Loft",
      "Dresser Unit",
      "Study Unit",
      "TV Unit",
      "Beds",
      "Side Table",
      "False Ceiling",
      "Wallpaper",
      "Painting",
      "Stone Cladding",
    ],
  },
  {
    label: "Bathroom",
    name: "bathroom",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Vanity Cabinet",
      "Mirror Unit",
      "Glass Partition",
      "Painting",
      "Tiles",
    ],
  },
  {
    label: "Guest Bathroom",
    name: "guest_bathroom",
    type: "checkboxControl",
    variant: "outlined",
    checkboxes: [
      "Vanity Cabinet",
      "Mirror Unit",
      "Glass Partition",
      "Painting",
      "Tiles",
    ],
  },
];
