import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { ContactusComponent } from './contactus';
import { AboutusComponent } from './aboutus';
import {CurrencyvaluesComponent} from './currencyvalues';
import { INRCurrComponent } from './inr-curr';
import { EURCurrComponent } from './eur-curr';
import { USDCurrComponent } from './usd-curr';
import { ChartComponent } from '@syncfusion/ej2-ng-charts';
import { AAPLComponent } from './aapl';
import { MFSLComponent } from './mfsl';
//import {ChartComponent} from './chart';

const appRoutes: Routes = [
    { path: '', component: LoginComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component:HomeComponent},
    { path: 'contactus',component: ContactusComponent},
    { path: 'aboutus',component:AboutusComponent},
    { path: 'currencyval',component:CurrencyvaluesComponent},
   // { path: 'chart',component:ChartComponent},
   { path: 'usd-curr',component:USDCurrComponent},
   { path: 'inr-curr',component:INRCurrComponent},
   { path: 'eur-curr',component:EURCurrComponent},
   { path: 'chart', component:ChartComponent},
   {path:'aapl',component:AAPLComponent},
   { path: 'mfsl', component:MFSLComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);