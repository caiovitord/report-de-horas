import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HeaderComponent } from './header/header.component';
import { AdminRootComponent } from './admin-root/admin-root.component';
import { NavBarComponent } from './header/nav-bar/nav-bar.component';
import { ContainerComponent } from './container/container.component';
import { PageHeaderComponent } from './container/page-header/page-header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MenuHeaderComponent } from './side-menu/menu-header/menu-header.component';
import { MenuLinksComponent } from './side-menu/menu-links/menu-links.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    HeaderComponent,
    AdminRootComponent,
    NavBarComponent,
    ContainerComponent,
    PageHeaderComponent,
    SideMenuComponent,
    MenuHeaderComponent,
    MenuLinksComponent,
    FooterComponent
  ],
  exports: [
    AdminRootComponent
  ]
})
export class LayoutModule { }
