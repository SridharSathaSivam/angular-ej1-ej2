import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChartAllModule } from '@syncfusion/ej2-ng-charts';
import { EJ_GRID_COMPONENTS } from 'ej-angular2/src/ej/grid.component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ChartAllModule],
    declarations: [AppComponent, EJ_GRID_COMPONENTS],
    bootstrap: [AppComponent]
})
export class AppModule { }
