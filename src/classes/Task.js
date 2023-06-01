import { Data } from '@lenra/app-server'

export class Task extends Data {
    constructor(description, done, user){
        super()
        this.description = description
        this.done = done
        this.user = user
    }
}