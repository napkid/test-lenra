import { Task } from "../classes/Task.js"

export default function(_props, event, api){
    return api.data.createDoc(
        new Task(
            event.value.description,
            false,
            "@me"
        )
    )
}