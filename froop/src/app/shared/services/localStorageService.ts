import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'hi';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

    
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
 
    }

    public doSomething(): number {
        const awesomenessLevel: number = this.storage.get(STORAGE_KEY) || 1337;
        this.storage.set(STORAGE_KEY, awesomenessLevel + 1);
        return awesomenessLevel;
    }  
}
