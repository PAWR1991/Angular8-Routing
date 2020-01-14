import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServerComponent } from "./server.component";
import { ServersService } from "../servers.service";
import { Injectable } from "@angular/core";

interface Server1 {
    id: number, name: string, status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server1> {

    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Server1> | Promise<Server1> | Server1 {
       return this.serversService.getServer(+route.params['id'])
    }
}