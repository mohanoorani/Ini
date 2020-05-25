import { SubjectType } from "./subject-type.enum";
import { TaskType } from "./task-type.enum";
import { RoleType } from "./role-type.enum";

export class RolePermission {
    constructor(public role:RoleType,public subject?:SubjectType,public task?:TaskType){
    }
}
