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

export function random_human_delay(ops:number, callback: () => void) {
    const SECOND_PER_OPS = 1/6;

    setTimeout(() => {
        callback();
    }, Math.floor(Math.random() + ops * SECOND_PER_OPS) * 1000);
}
