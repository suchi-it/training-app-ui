const PORT = 8081;
export const API_END_POINT = `http://localhost:${PORT}`;
export const COMPANY_NAME = "Suchi IT";
export const DEBOUNCE_TIME = 500;
export const EMAIL_VALIDATION_REGEX =
  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const PHONE_NUMBER_VALIDATION_REGEX =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
export const PASSWORD_VALIDATION_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]?[\w!@#$%^&*]{8,}$/; // Minimum eight characters, at least one letter and one number:

// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ //Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:

export const TUMERIC_PRODUCT_TYPE = [
  "Turmeric Powder",
  "Coriander Powder",
  "Chilli Powder",
  "Thalimpu Ginjalu",
  "Badam",
  "Honey",
];

export const PACKAGE_SIZES = [
  { value: 50, label: "50gms" },
  { value: 100, label: "100gms" },
  { value: 200, label: "200gms" },
  { value: 500, label: "500gms" },
  { value: 1000, label: "1kg" },
  { value: 25000, label: "25kg" },
  { value: 50000, label: "50kg" },
];

export const HONEY_PACKAGE_SIZES = [
  { value: 500, label: "500ml" },
  { value: 1000, label: "1L" },
];

export const ROLE_ADMIN = "ADMIN";
export const STATUS = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
  COMPLETED: "COMPLETED",
  CREATED: "CREATED",
  IN_PROGRESS: "IN PROGRESS",
  DELIVERED: "DELIVERED",
  PROCESSING: "PROCESSING",
  READY_FOR_DELIVERY: "READY FOR DELIVERY",
  OUT_FOR_DELIVERY: "OUT FOR DELIVERY",
  PICK_UP: "PICK UP",
  PAID: "PAID",
  DUE: "DUE",
};

export const getStatusColor = (status) => {
  if (status === STATUS.APPROVED) {
    return "info";
  }
  if (
    status === STATUS.ACCEPTED ||
    status === STATUS.COMPLETED ||
    status === STATUS.DELIVERED
  ) {
    return "success";
  }
  if (status === STATUS.REJECTED) {
    return "error";
  }
  return "info";
};

export const numberFormat = (number) =>
  new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  }).format(number);
