import { Injectable } from '@angular/core';

export interface Shared{
    data:number;
}

@Injectable() 
export class SharedService {
    sharingData: Shared = {data:1};
    saveData(str) {
        this.sharingData.data = str;
    }

    getData(){
        return this.sharingData.data;
    }
}