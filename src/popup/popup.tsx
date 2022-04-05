import { AppShell, Header, MantineProvider } from '@mantine/core';
import React from "react";
import ReactDOM from "react-dom";
import { StorageFrontend } from "../common/background_api_frontend";
import { SolutionsState } from "../inject/solutions/abstract_solution";
import { instances } from "../inject/solutions/solutions";
import { AppHeader } from "./ui/header"

ReactDOM.render(
    <React.StrictMode>
        <MantineProvider theme={{ colorScheme: 'dark' }}>
            <AppShell
                padding="md"
                header={
                    <Header height={60} p="xs">{
                        <AppHeader />
                    }</Header>
                }
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                {<p>testing 2</p>}
            </AppShell>
        </MantineProvider>
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
