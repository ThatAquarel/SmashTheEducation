import { AppShell, Header, MantineProvider } from '@mantine/core';
import React from "react";
import ReactDOM from "react-dom";
import { AppHeader } from "./ui/header";
import { Select } from "./ui/select";

function App() {
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
            <AppShell
                padding="md"
                header={
                    <Header height={80} p="xs">{
                        <AppHeader />
                    }</Header>}
            >
                {<Select />}
            </AppShell>
        </MantineProvider >
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
