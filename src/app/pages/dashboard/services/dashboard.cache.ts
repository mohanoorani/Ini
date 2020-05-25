import { Injectable } from '@angular/core';
import { storage } from '../models/storage';

@Injectable()
export class DashboardCachingService {

    constructor() { }

    setItem(name: string, obj: any) {

        let item: storage = new storage(Date.now() , JSON.stringify(obj))
            

        localStorage.setItem(name , JSON.stringify(item));
    }


    getItem(name: string): string {
       
        let item: storage = JSON.parse(localStorage.getItem(name));

        if(item){

            if(Date.now() - item.Date < 86400 ){
                return JSON.parse(item.Value);
            }
            else{
                return "";
            }
        }

        return "";
    }
}