import { Flex, View } from "@lenra/components";
import { views } from "../index.gen.js";

export default function(data, props) {
  return {
    type: "flex",
    direction: "vertical",
    crossAxisAlignment: "center",
    padding: {
      top: 16, 
      bottom: 16,
      left: 32,
      right: 32
    },
    spacing: 8,
    children: [
      {
        type: "text",
        value: "Lenra Todo List",
        style: {
          fontWeight: "w800",
          fontSize: 22
        }
      },
      {
        type: "view",
        name: "addTaskForm",
      },
      {
        type: 'view',
        name: 'taskList'
      }
    ]
  }
}
