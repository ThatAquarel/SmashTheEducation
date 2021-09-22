import { answer_class } from "./solutions/answer";

chrome.commands.onCommand.addListener(async (command) => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab.id == null) return;

    if (command === "toggle_answers") {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: toggle_answers,
        });
    }
});

function toggle_answers() {
    let answers = Array.from(
        document.getElementsByClassName(answer_class) as
        HTMLCollectionOf<HTMLElement>
    );

    for (const answer of answers) {
        let opacity = answer.style.opacity;

        if (opacity === "0" || opacity === "") answer.style.opacity = "1";
        else if (opacity === "1") answer.style.opacity = "0";
    }
}

