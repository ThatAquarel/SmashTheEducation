// import { toggle_answers } from "../functions/toggle_answers";
import { LoadingOverlay, MantineProvider, Overlay } from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { NotificationsProvider } from "@mantine/notifications";
import React from "react";
import ReactDOM from "react-dom";
import { instances } from "./solutions/solutions";

for (let solution of instances) {
    if (solution.is_using_solution()) {
        solution.show();
        break;
    }
}

function keydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === "Q") {
        // toggle_answers();
    }
}

document.addEventListener('keydown', keydown, false);


const current_site = document.getElementsByClassName("current-site-Smash")[0];
const react_root_id = `react-root-${randomId()}`

if (current_site != null) {
    const react_root = document.createElement("div");
    react_root.setAttribute("id", react_root_id);
    current_site.appendChild(react_root);

    ReactDOM.render(
        <MantineProvider>
            <NotificationsProvider zIndex={2147483647} />
        </MantineProvider>,
        document.getElementById(react_root_id)
    );
}
