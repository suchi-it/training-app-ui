
import { LoadingButton } from "@mui/lab";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HONEY_PACKAGE_SIZES,
  PACKAGE_SIZES,
  TUMERIC_PRODUCT_TYPE,
} from "src/utils/constants";

NewOrderFormTumeric.propTypes = {
  onSubmit: PropTypes.func,
  buttonLabel: PropTypes.string,
  orderData: PropTypes.any,
};

export default function NewOrderFormTumeric({
  buttonLabel = "Create",
  onSubmit,
  orderData,
}) {
  const [batchName, setbatchName] = useState(null);
  const [batchId, setbatchId] = useState("");
  const [course, setcourse] = useState("");
  const [trainerName, settrainerName] = useState("");
  const [trainerEmailId, settrinerEmailId] = useState("");
  const [trainerConatctNo, settrainerConatctNo] = useState("");
  const [batchStartDate, setbatchStartDate] = useState("");
  const [batchEndtDate, setbatchEndtDate] = useState("");

  const loggedUserDetails = JSON.parse(localStorage.user);

  // const { orderCreationSuccess } = useSelector((state) => state.order);

  // useEffect(() => {
  //   if (orderData) {
  //     const { orderDate, quantity, productType, packingSize } = orderData;
  //     setOrderDate(moment(orderDate).format());
  //     setQuantity(quantity);
  //     setOrderType(productType);
  //     setPackingSize(packingSize);
  //   }
  // }, [orderData]);

  // useEffect(() => {
  //   if (orderCreationSuccess) {
  //     clearForm();
  //   }
  // }, [orderCreationSuccess]);

  // const handleOrderDateChange = (newDate) => {
  //   setOrderDate(newDate);
  // };

  // const handleQuantityChange = (e) => {
  //   setQuantity(e.target.value);
  // };

  // const handleProductTypeChange = (event) => {
  //   setOrderType(event.target.value);
  //   setPackingSize(null);
  // };

  // const handlePackingSizeChange = (event) => {
  //   setPackingSize(event.target.value);
  // };

  // const handleSubmitClick = () => {
  //   const payload = {
  //     orderDate: moment.utc(orderDate).format(),
  //     customerId: loggedUserDetails.customerId,
  //     productType,
  //     packingSize,
  //     quantity: Number(quantity),
  //   };
  //   onSubmit(payload);
  // };

  // const clearForm = () => {
  //   setOrderDate(null);
  //   setQuantity("");
  //   setOrderType("");
  //   setPackingSize("");
  // };
  const handlebatchNameChange = (e) => {
    setbatchName(e.target.value);
  };
  const handlebatchIdChange = (e) => {
    setbatchId(e.target.value);
  };

  const handlecourseChange = (e) => {
    setcourse(e.target.value);
  };
  const handlesettrainerNameChange = (e) => {
    settrainerName(e.target.value);
  };
  const handlesettrainerEmailIdChange = (e) => {
    settrinerEmailId(e.target.value);
    
  };
  const handlesettrainerContactNOChange = (e) => {
    settrainerConatctNo(e.target.value);
    
  };
  const handlesetbatchStartDateChange = (e) => {
    setbatchStartDate(e.target.value);
  };
  const handlesetbatchEndDateChange = (e) => {
    setbatchEndtDate(e.target.value);
  };

  const handleSubmit = () => {

    const payload = {
      batchName:batchName,
      batchId:batchId,
      course:course,
      trainerName:trainerName,
      trainerEmailId:trainerEmailId,
      trainerConatctNo:trainerConatctNo,
      tatchStartDate:batchStartDate,
      batchEndtDate:batchEndtDate

    };
    




    console.log(payload);

  };

  return (
    <>
      <Stack
        direction="row"
        display={"grid"}
        gridTemplateColumns={"repeat(2, 1fr)"}
        gap={3}
        sx={{ my: 3 }}
      >
        {/* <Stack spacing={3} style={{ marginTop: 10 }}> */}
        {/* <LocalizationProvider dateAdapter={AdapterMoment}>
          <DesktopDatePicker
            label="Order Date"
            inputFormat="YYYY/MM/DD"
            value={orderDate}
            onChange={handleOrderDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <FormControl fullWidth>
          <InputLabel id="product-type">Product Type</InputLabel>
          <Select
            labelId="product-type"
            id="product-type"
            value={productType}
            label="Product Type"
            onChange={handleProductTypeChange}
          >
            {TUMERIC_PRODUCT_TYPE.map((ele) => (
              <MenuItem key={ele} value={ele}>
                {ele}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="package-size">Packing Size</InputLabel>
          <Select
            labelId="package-size"
            id="package-size"
            value={packingSize}
            label="Packing Size"
            onChange={handlePackingSizeChange}
          >
            {(productType === "Honey"
              ? HONEY_PACKAGE_SIZES
              : PACKAGE_SIZES
            ).map((ele) => (
              <MenuItem key={ele.value} value={ele.value}>
                {ele.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
{/* 
        <TextField
          name="batchName"
          type={"text"}
          label="Student Name"
          value={batchName}
          onChange={handlebatchNameChange}
        />
        <TextField
          name="batchId"
          type={"text"}
          label="Contact No"
          value={batchId}
          onChange={handlebatchIdChange}
        />
        <TextField
          name="course"
          type={"text"}
          label="Course"
          value={course}
          onChange={handlecourseChange}
        />
        <TextField
          name="TrainerName"
          type={"text"}
          label="Email Id"
          value={trainerName}
          onChange={handlesettrainerNameChange}
        />
        <TextField
          name="trainerEmailId"
          type={"text"}
          label="Trainer Email Id"
          value={trainerEmailId}
          onChange={handlesettrainerEmailIdChange}
        />
           <TextField
          name="trainerContactNo"
          type={"number"}
          label="College Name"
          value={trainerConatctNo}
          onChange={handlesettrainerContactNOChange}
        />
        
        <TextField
          name="batchStartDate"
          type="text"
          label="Education"
          value={batchStartDate}
          onChange={handlesetbatchStartDateChange}
        />


        <TextField
          name="batchEndDate"
          type="text"
          label="State"
          value={batchEndtDate}
          onChange={handlesetbatchEndDateChange}
        /> */}
      </Stack>

      {/* <LoadingButton
        // fullWidth
        // maxWidth="md"
        size="large"
        type="submit"
        variant="contained"
        // sx={{ mt: 2 }}
        onClick={handleSubmit}
      >
        {`${buttonLabel} Request`}
      </LoadingButton> */}
    </>
  );
}
