import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RhNewPageComponent } from './pages/report-horas/rh-new-page/rh-new-page.component';
import { ReqNewPageComponent } from './pages/requisitos/req-new-page/req-new-page.component';
import { ReqListComponent } from './pages/requisitos/req-list/req-list.component';

const routes: Routes = [
   /* { path: 'requisitos', component: ReqPageComponent },
    { path: '', component: RhPageComponent }*/
    // { path: '**', component: PageNotFoundComponent },


    { path: 'requisitos-new', component: ReqNewPageComponent },
    { path: 'requisitos-list', component: ReqListComponent },
    { path: 'report-horas', component: RhNewPageComponent },
    { path: '', redirectTo: '/requisitos', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
