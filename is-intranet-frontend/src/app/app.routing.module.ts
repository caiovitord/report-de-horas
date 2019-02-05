import { AdminRootComponent } from './layout/admin-root/admin-root.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RhPageComponent } from './pages/report-horas/rh-page/rh-page.component';
import { ReqPageComponent } from './pages/requisitos/req-page/req-page.component';

const routes: Routes = [
   /* { path: 'requisitos', component: ReqPageComponent },
    { path: '', component: RhPageComponent }*/
    // { path: '**', component: PageNotFoundComponent },


    { path: 'requisitos', component: ReqPageComponent },
    { path: 'report-horas', component: RhPageComponent },
    { path: '', redirectTo: '/requisitos', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
