import { DataApi } from "@lenra/app-server"
import { Task } from "../classes/Task.js"

export default function (data, _props) {
  return {
    type: "flexible",
    child: {
      type: "flex",
      direction: "vertical",
      scroll: true,
      children: taskList(data),
    }
  }
}

function taskList(tasks) {
  if (tasks == undefined || tasks.length <= 0) {
    return [{
      type: "text",
      value: "No tasks"
    }]
  }

  return tasks.map(task => {
    return {
      type: "view",
      name: "taskCard",
      find: {
        coll: DataApi.collectionName(Task),
        query: task
      }
    }
  })
}

