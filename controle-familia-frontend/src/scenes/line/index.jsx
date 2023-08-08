import { Box } from "@mui/material";
import Header from "../../components/Header";
import GraficoLinha from "../../components/GraficoLinha";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <GraficoLinha />
      </Box>
    </Box>
  );
};

export default Line;
