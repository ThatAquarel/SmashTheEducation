import { AppShell, Header, MantineProvider, Title } from '@mantine/core';
import React from "react";
import ReactDOM from "react-dom";
import { StorageFrontend } from "../common/background_api_frontend";
import { instances } from "../inject/solutions/solutions";
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

console.log("popup.tsx")

// Set default states if first time
StorageFrontend.getState((state) => {
    if (Object.keys(state).length !== 0) { return };

    let new_state: { [id: string]: boolean } = {}
    instances.forEach((instance) => {
        if (!(instance.smash_tag in state)) {
            new_state[instance.smash_tag] = true;
        }
    });
    new_state["show"] = true;

    console.log("Setting up default values");
    StorageFrontend.setState(new_state);
});