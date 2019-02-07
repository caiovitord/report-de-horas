import { SpListComponent } from './pages/sprints/sp-list/sp-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RhNewPageComponent } from './pages/report-horas/rh-new-page/rh-new-page.component';
import { ReqNewPageComponent } from './pages/requisitos/req-new-page/req-new-page.component';
import { ReqListComponent } from './pages/requisitos/req-list/req-list.component';
import { ReqEditComponent } from './pages/requisitos/req-edit/req-edit.component';
import { SpNewPageComponent } from './pages/sprints/sp-new-page/sp-new-page.component';

const routes: Routes = [
   /* { path: 'requisitos', component: ReqPageComponent },
    { path: '', component: RhPageComponent }*/
    // { path: '**', component: PageNotFoundComponent },


    { path: 'requisitos-new', component: ReqNewPageComponent },
    { path: 'sprints-new', component: SpNewPageComponent },
    { path: 'sprints-list', component: SpListComponent },
    { path: 'requisitos-edit/:id', component: ReqEditComponent },
    { path: 'requisitos-list', component: ReqListComponent },
    { path: 'report-horas', component: RhNewPageComponent },
    { path: '', redirectTo: '/sprints-new', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
