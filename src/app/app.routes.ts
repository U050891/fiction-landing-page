import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared-components/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                component: HomePageComponent
            },
        ]
    }
];
