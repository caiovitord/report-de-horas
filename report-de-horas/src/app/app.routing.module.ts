import { AdminRootComponent } from './layout/admin-root/admin-root.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RhPageComponent } from './pages/report-horas/rh-page/rh-page.component';

const routes: Routes = [
    { path: '', component: RhPageComponent } // ,
    // { path: '', component: FeatureComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
