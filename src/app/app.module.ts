import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MenuModule } from 'primeng/menu';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './admin/sidemenu/sidemenu.component';
import { Login1Component } from './login/login1/login1.component';
import { Login2Component } from './login/login2/login2.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    DashboardComponent,
    SidemenuComponent,
    Login1Component,
    Login2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    MenuModule,
    PanelMenuModule,
    CardModule,
    ScrollerModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
