import {NgModule} from '@angular/core';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

//localhost:4200/user
// ':'{name} is a param that can change
const appRoutes: Routes =[ 
    {path: '', component: HomeComponent},
    {path: 'users', component: UsersComponent, children:[
      {path: ':id/:name', component: UserComponent}
    ]},
    {path: 'servers', component: ServersComponent, children:[
      {path: ':id', component: ServerComponent},
      {path: ':id/edit', component: EditServerComponent}
    ]},
    {path: 'not-found', component:PageNotFoundComponent},
    // redirectTo uses a route path
    //'**' is the wildcard(catching all unknown routes) and make sure it is the last path in the array
    //because angular reads the route array in order top to bottom (0-1)
    {path: '**', redirectTo: '/not-found', pathMatch:'full'}
  ];
  // By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just /
  //pathMatch 'full' only now angular will look at /recipes
@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[RouterModule]

})

export class AppRoutingModule{

}