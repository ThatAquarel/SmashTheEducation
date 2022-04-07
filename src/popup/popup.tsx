import { AppShell, Header, MantineProvider, Paper, Space } from '@mantine/core';
import React from "react";
import ReactDOM from "react-dom";
import { Config } from './ui/config';
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
                {<>
                    <Config />
                    <Space h="xs" />
                    <Paper
                        style={{
                            padding: '4px',
                        }}
                        sx={(theme) => ({
                            backgroundColor: theme.colors.dark[8]
                        })}>
                        <Select />
                    </Paper>
                </>}
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
