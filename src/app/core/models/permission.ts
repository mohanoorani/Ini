import { SubjectType,TaskType,RoleType } from "./index";

export class Permission {
    constructor(public subject?:SubjectType,public task?:TaskType){
    }
}
