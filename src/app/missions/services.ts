import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable()

export class Misiones_Services
{
    private API_SERVER = 'https://api.spacexdata.com/v3/missions'
    constructor(public http: HttpClient){}
    public getMissions(): Observable<any>
    {
        return this.http.get(this.API_SERVER);
    }
}

