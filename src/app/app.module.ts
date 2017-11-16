import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningComponent } from './warning/warning.component';
import { DrawerComponent } from './drawer/drawer.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';
import { MessageService } from './app.service';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    DrawerComponent,
    PageNotFoundComponent,
    WarningComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
