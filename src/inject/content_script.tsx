import { MantineProvider } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom";
import { SolutionState } from "./solution_state";

const current_site = document.getElementsByClassName("current-site-Smash")[0];
const react_root_id = `react-root-${randomId()}`

if (current_site != null) {
    const react_root = document.createElement("div");
    react_root.setAttribute("id", react_root_id);
    current_site.appendChild(react_root);

    ReactDOM.render(
        <MantineProvider theme={{ colorScheme: 'dark' }}>
            <NotificationsProvider zIndex={2147483647}>
                <SolutionState />
            </NotificationsProvider>
        </MantineProvider>,
        document.getElementById(react_root_id)
    );
}
