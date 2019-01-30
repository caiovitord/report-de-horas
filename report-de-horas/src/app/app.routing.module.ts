import { AdminRaizComponent } from './estrutura/admin-raiz/admin-raiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RhPaginaComponent } from './pages/report-horas/rh-pagina/rh-pagina.component';

const routes: Routes = [
    { path: '', component: RhPaginaComponent } // ,
    // { path: '', component: FeatureComponent },
    // { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
