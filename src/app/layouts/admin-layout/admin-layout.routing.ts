import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { QuoteConfiguratorComponent } from 'src/app/pages/quoteconfigurator/quote-configurator.component';
import { TablesComponent } from 'src/app/pages/rfqconfigurator/tables.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'quoteconfigurator',  component: QuoteConfiguratorComponent },
    { path: 'rfqconfigurator',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
