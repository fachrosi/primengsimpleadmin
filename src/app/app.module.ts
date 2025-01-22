import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//================ PrimeNG =========================
import { provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { RippleModule } from 'primeng/ripple';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ScrollerModule } from 'primeng/scroller';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { SidemenuComponent } from './admin/sidemenu/sidemenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Login1Component } from './login/login1/login1.component';
import { Login2Component } from './login/login2/login2.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { StaticComponent } from './static/static.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidemenuComponent,
    DashboardComponent,
    Login1Component,
    Login2Component,
    DocumentationComponent,
    StaticComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    ButtonModule,
    ToolbarModule,
    SidebarModule,
    RippleModule,
    MenuModule,
    PanelMenuModule,
    CardModule,
    ScrollerModule,
    InputTextModule,
    MessagesModule, MessageModule,
    InputGroupModule, InputGroupAddonModule
  ],
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
