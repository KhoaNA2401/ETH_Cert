import { Stack } from "@mui/material";
import { Box, styled } from "@mui/system";
import { Breadcrumb, SimpleCard } from "app/components";
import FormAddCert from "./FormAddCert";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AppForm = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb routeSegments={[{ name: "Material", path: "/material" }, { name: "Add Certificate" }]} />
      </Box>

      <Stack spacing={3}>
        <SimpleCard title="Form Add Certificate">
          <FormAddCert />
        </SimpleCard>

        {/* <SimpleCard title="stepper form">
          <StepperForm />
        </SimpleCard> */}
      </Stack>
    </Container>
  );
};

export default AppForm;
