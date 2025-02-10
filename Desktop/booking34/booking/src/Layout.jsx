
import {
createThene, 
Container, 
CssBaseline,
 ThemeProvider, 
} from  "gmui/material"; 
import  {Header }  from "../Header/Header";
import { orange } from "@mui/material/colors";
"@nus/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: orange[500],
        },
    },
});


const Layout = () => (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container component="main" sx={{ marginTop: '20px'}}>
            <Outlet />
        </Container>
    </ThemeProvider>
);

export default Layout;