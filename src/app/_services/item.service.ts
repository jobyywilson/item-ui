import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { ItemBean } from '@app/_models/item';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ItemService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
    getAllItems() {
        return this.http.get<ItemBean[]>(`${environment.apiUrl}/items`);
    }
    getItemById(id:number) {
        return this.http.post<any>(`${environment.apiUrl}/items`, { id })
        .pipe(map(item => {
            return item;
        }));
    }
}