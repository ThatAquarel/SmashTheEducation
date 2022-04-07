// import { toggle_answers } from "../functions/toggle_answers";
import { LoadingOverlay, Overlay } from "@mantine/core";
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
const innerHTML = current_site.innerHTML;
current_site.innerHTML = "";

if (current_site != null) {
    ReactDOM.render(
        <div>
            {/* <LoadingOverlay visible={true} /> */}
            <div className="smash_content" dangerouslySetInnerHTML={{ __html: innerHTML }}></div>
        </div>,
        current_site
    );
};
