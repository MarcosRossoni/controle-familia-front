import { Box } from "@mui/material";
import Header from "../../components/Header";
import GraficoBarra from "../../components/GraficoBarra";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <GraficoBarra />
      </Box>
    </Box>
  );
};

export default Bar;
