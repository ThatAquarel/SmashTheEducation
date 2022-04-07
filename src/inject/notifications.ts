import { showNotification } from "@mantine/notifications";

export function show_answer(answer:string){
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