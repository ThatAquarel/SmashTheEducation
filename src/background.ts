// import { Solution } from "./solutions/solution";

// const solutions = Solution.get_instances();

// let functionality = Array(solutions.length);
// loadFunctionality((states: Boolean[]) => {
//     functionality = [...states];
// });

// chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
//     if (message.loadFunctionality) {
//         loadFunctionality((states) => {
//             sendResponse(states);
//         });
//     } else if (message.saveFunctionality) {
//         saveFunctionality(message.saveFunctionality);
//         sendResponse(true);
//     }
// });

// function saveFunctionality(functionality: Boolean[]) {
//     for (let i = 0; i < solutions.length; i++) {
//         let key = solutions[i].class_name;
//         let value = functionality[i];

//         let dict: { [index: string]: Boolean } = {};
//         dict[key] = value;

//         chrome.storage.sync.set(dict, () => {
//             console.log(dict);
//         });
//     }
// }

// function loadFunctionality(callback: (states: Boolean[]) => void) {
//     if (!functionality.includes(undefined)) callback(functionality);

//     let new_functionality = Array(solutions.length);
//     let calls = 0;

//     solutions.map((solution, i) => {
//         chrome.storage.sync.get([solution.class_name], (result) => {
//             let state = result[solution.class_name];
//             if (state != true && state != false) state = true;

//             new_functionality[i] = state;
//             calls++;

//             if (calls >= new_functionality.length) {
//                 callback(new_functionality);
//             }
//         });
//     });
// }