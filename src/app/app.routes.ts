import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DrawerComponent } from './drawer/drawer.component';
import { WarningComponent } from './warning/warning.component';

export const appRoutes: Routes = [
    {
      path: 'warning', component: WarningComponent,
      data: { title: 'Component 1' }
    },
    {
      path: 'drawer',
      component: DrawerComponent,
      data: { title: 'Component 2' }
    },
    {
      path: '',
      redirectTo: '/warning',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
  ];


export const routing = RouterModule.forRoot(appRoutes);
