export default function(data, props){
    return {
        type: 'form',
        onSubmit: {
            action: 'submitTask'
        },
        child: {
            type: "flex",
            crossAxisAlignment: 'center',
            spacing: 2,
            children: [
                {
                    type: 'text',
                    value: 'your task : '
                },
                {
                    type: 'flexible',
                    child: {
                        type: 'textfield',
                        value: '',
                        name: 'description'
                    }
                },
                {
                    type: 'button',
                    text: 'Add',
                    submit: true
                }
            ]
        }
    }
}