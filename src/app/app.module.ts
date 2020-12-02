import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jqxChartModule }   from 'jqwidgets-ng/jqxchart';
import { jqxDropDownListModule } from 'jqwidgets-ng/jqxdropdownlist';
//import { Observable } from 'rxjs/add/opera///p' ;
import{ jqxDropDownListComponent } from 'jqwidgets-ng/jqxdropdownlist'; 
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService, RestService } from './_services';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { ContactusComponent } from './contactus';
import { CurrencyvaluesComponent } from './currencyvalues';
import { AboutusComponent } from './aboutus';
//import { ChartComponent } from './chart/chart.component';
import { ChartAllModule, RangeNavigatorAllModule} from '@syncfusion/ej2-ng-charts';
import { CandleSeriesService, ColumnSeriesService } from '@syncfusion/ej2-ng-charts/src/chart/chart.component';
import { USDCurrComponent } from './usd-curr';
import { INRCurrComponent } from './inr-curr';
import { EURCurrComponent } from './eur-curr';
import { ChartComponent } from './chart';
import { AAPLComponent } from './aapl';
import { MFSLComponent } from './mfsl';
@NgModule({
    imports: [
        BrowserModule,ReactiveFormsModule,
        HttpClientModule,
        routing,
        ChartAllModule, RangeNavigatorAllModule,jqxChartModule, jqxDropDownListModule, FormsModule
    ],
    declarations: [
        AppComponent,
     //   ChartComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,ContactusComponent,
        CurrencyvaluesComponent ,
        AboutusComponent ,
        USDCurrComponent ,
        INRCurrComponent,
        EURCurrComponent,
        ChartComponent,
        AAPLComponent ,
        MFSLComponent 
      ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        RestService,
        CandleSeriesService, ColumnSeriesService,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }