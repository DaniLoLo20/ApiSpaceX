import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
@Injectable()


export class Servicios_De_Lanzamiento
{
    private API_SERVER_2 = 'https://api.spacexdata.com/v3/launches'
    constructor(public http: HttpClient){}
    public getLaunch(): Observable<any>
    {
        return this.http.get(this.API_SERVER_2);
    }
}