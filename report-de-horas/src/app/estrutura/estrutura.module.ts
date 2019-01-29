import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { AdminRaizComponent } from './admin-raiz/admin-raiz.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { PageHeaderComponent } from './container/page-header/page-header.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { MenuHeaderComponent } from './menu-lateral/menu-header/menu-header.component';
import { MenuLinksComponent } from './menu-lateral/menu-links/menu-links.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
    AdminRaizComponent,
    NavBarComponent,
    ContainerComponent,
    PageHeaderComponent,
    MenuLateralComponent,
    MenuHeaderComponent,
    MenuLinksComponent,
    FooterComponent
  ],
  exports: [
    AdminRaizComponent
  ]
})
export class EstruturaModule { }
