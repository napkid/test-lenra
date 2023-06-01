export function taskCard([task], _props){
    return {
        type: 'flex',
        direction: 'vertical',
        crossAxisAlignment: 'center',
        children: [{
            type: "text",
            value: task.description
        }]
    }
}
