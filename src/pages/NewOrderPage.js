import { Container, Typography } from "@mui/material";
// @mui
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { createOrderRequest } from "src/app/features/orders/ordersAPI";
import { ApplicationTitle } from "src/common";
import NewOrderFormTumeric from "src/sections/dashboard/new-order/NewOrderFormTumeric";

// ----------------------------------------------------------------------

const StyledRoot = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const StyledContent = styled("div")(({ theme }) => ({
  // maxWidth: 680,
  margin: "auto",
  //   minHeight: '100vh',
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(3, 0),
}));

// ----------------------------------------------------------------------

export default function NewOrderPage() {
  const dispatch = useDispatch();

  const handleSubmitForm = (values) => {
    dispatch(createOrderRequest(values));
  };

  return (
    <>
      <ApplicationTitle title={"Batches Dash board"} />

      <Typography variant="h4" gutterBottom>
        All Students
      </Typography>
      <StyledRoot>
        <Container maxWidth="md">
          <StyledContent>
            {/* <NewOrderForm onSubmit={handleSubmitForm} /> */}
            <NewOrderFormTumeric onSubmit={handleSubmitForm} />
          </StyledContent>
        </Container>
      </StyledRoot>
    </>
  );
}
