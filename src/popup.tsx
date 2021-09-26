import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from "react";
import ReactDOM from "react-dom";
import Settings from "./settings";

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function App() {
    return (
        <Box sx={{
            p: 2,
            bgcolor: 'background.default',
            display: 'grid',
            gridTemplateColumns: { md: '1fr 1fr' },
            gap: 2,
        }}>
            <Paper elevation={0}>
                <Typography variant="h6"
                    gutterBottom
                    component="div"
                    align="center"
                    sx={{
                        fontWeight: "bold"
                    }}>
                    SmashTheEducation
                    <Typography gutterBottom
                        color="text.secondary"
                        sx={{ fontSize: 14 }}>
                        version 1.0
                    </Typography>
                </Typography>
            </Paper>
            <Paper elevation={2}>
                <Container maxWidth="sm">
                    <Settings />
                </Container>
            </Paper>
        </Box>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
