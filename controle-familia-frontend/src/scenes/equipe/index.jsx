import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";
import {DataGrid} from "@mui/x-data-grid";
import {dadosEstaticos} from "../../dados/DadosEstaticos";
import {AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined} from "@mui/icons-material";

const Equipe = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colunas = [
        {field: "id", headerName: "ID"},
        {
            field: "name",
            headerName: "Nome",
            flex: 1,
            cellClassName: "name-column--cell"
        },
        {
            field: "age",
            headerName: "Idade",
            type: "number",
            headerAlign: "left",
            align: "left"
        },
        {
            field: "phone",
            headerName: "Telefone",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        {
            field: "access",
            headerName: "Nivel de Acesso",
            flex: 1,
            renderCell: ({row: {access}}) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={
                        access === "admin"
                            ? colors.greenAccent[600]
                            : colors.greenAccent[700]
                        }
                        borderRadius="4px"
                    >
                        {access === "admin" && <AdminPanelSettingsOutlined/>}
                        {access === "manager" && <SecurityOutlined/>}
                        {access === "user" && <LockOpenOutlined/>}
                        <Typography color={colors.grey[100]} sx={{ml: "5px"}}>

                        </Typography>
                    </Box>
                )
            }
        },
    ]

    return (
        <Box m="20px">
            <Header title="EQUIPE" subtitle="Dados dos Membors do Time"/>
            <Box m="40px 0 0 0" height="75vh">
                <DataGrid checkboxSelection rows={dadosEstaticos} columns={colunas} />
            </Box>
        </Box>
    )
}

export default Equipe