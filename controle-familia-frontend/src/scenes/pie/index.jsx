import { Box } from "@mui/material";
import Header from "../../components/Header";
import GraficoPizza from "../../components/GraficoPizza";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <GraficoPizza />
      </Box>
    </Box>
  );
};

export default Pie;
