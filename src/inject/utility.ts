import { showNotification } from "@mantine/notifications";

export function show_answer(answer: string) {
    setTimeout(() => {
        showNotification({
            title: answer,
            message: "",
            autoClose: false,
            color: "teal",
            styles: () => ({
                title: { fontSize: "18px" },
                message: { fontSize: "18px" }
            }),
        });
    }, 500);
}

export function calculate_op_time(ops: number, bias: number): number {
    const SECOND_PER_OPS = 1 / 6;
    return Math.floor((bias + ops * SECOND_PER_OPS) * 1000);
}

export function random_human_delay(ops: number, callback: () => void) {
    setTimeout(() => {
        callback();
    }, calculate_op_time(ops, Math.random()));
}

export function getElementByXpath(path : string) {
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue as HTMLElement;
}
