import { AppShell, Header, MantineProvider, Title } from '@mantine/core';
import React from "react";
import ReactDOM from "react-dom";
import { StorageFrontend } from "../common/background_api_frontend";
import { SolutionsState } from "../inject/solutions/abstract_solution";
import { instances } from "../inject/solutions/solutions";
import { AppHeader } from "./ui/header";

function App() {
    return (
        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles>
            <AppShell
                padding="md"
                header={
                    <Header height={80} p="xs">{
                        <AppHeader />
                    }</Header>
                }
            >
                {
                    <Title>
                        Testing 2
                    </Title>
                }
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
    let new_state: { [id: string]: number } = {}

    instances.forEach((instance) => {
        if (!(instance.smash_tag in state)) {
            new_state[instance.smash_tag] = SolutionsState.Disabled
        }
    });

    if (Object.keys(new_state).length === 0) { return };

    console.log("Setting up default values");
    StorageFrontend.setState(new_state);
});
