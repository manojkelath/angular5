import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrawerComponent } from './drawer/drawer.component';
import { WarningComponent } from './warning/warning.component';

export const appRoutes: Routes = [
    {
      path: 'crisis-center', component: WarningComponent,
      data: { title: 'crisis List' }
    },
    {
      path: 'heroes',
      component: DrawerComponent,
      data: { title: 'Heroes List' }
    },
    {
      path: '',
      redirectTo: '/heroes',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];


export const routing = RouterModule.forRoot(appRoutes);
