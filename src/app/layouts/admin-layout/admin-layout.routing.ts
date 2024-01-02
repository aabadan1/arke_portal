import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';

import { QuoteConfiguratorComponent } from 'src/app/pages/quoteconfigurator/quote-configurator.component';
import { RFQConfiguratorComponent } from 'src/app/pages/rfqconfigurator/rfqconfigurator.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'quoteconfigurator',  component: QuoteConfiguratorComponent },
    { path: 'rfqconfigurator',         component: RFQConfiguratorComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
