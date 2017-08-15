import { Component } from '@angular/core';
import { gridData } from './grid-data';
@Component({
    selector: 'my-app',
    templateUrl: `./page.html`,
})
export class AppComponent {

    public gridData: Object[] = gridData;
    public data: Object[] = [
        { x: new Date(2000, 0, 1), y: 4 }, { x: new Date(2001, 0, 1), y: 3.0 },
        { x: new Date(2002, 0, 1), y: 3.8 }, { x: new Date(2003, 0, 1), y: 3.4 },
        { x: new Date(2004, 0, 1), y: 3.2 }, { x: new Date(2005, 0, 1), y: 3.9 }
    ];
    public data1: Object[] = [
        { x: new Date(2000, 0, 1), y: 2.6 }, { x: new Date(2001, 0, 1), y: 2.8 },
        { x: new Date(2002, 0, 1), y: 2.6 }, { x: new Date(2003, 0, 1), y: 3 },
        { x: new Date(2004, 0, 1), y: 3.6 }, { x: new Date(2005, 0, 1), y: 3 }
    ];
    public data2: Object[] = [
        { x: new Date(2000, 0, 1), y: 2.8 }, { x: new Date(2001, 0, 1), y: 2.5 },
        { x: new Date(2002, 0, 1), y: 2.8 }, { x: new Date(2003, 0, 1), y: 3.2 },
        { x: new Date(2004, 0, 1), y: 2.9 }, { x: new Date(2005, 0, 1), y: 2 }
    ];
    public primaryXAxis: Object = {
        title: 'Years',
        valueType: 'DateTime',
        labelFormat: 'y',
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        intervalType: 'Years',
        edgeLabelPlacement: 'Shift'
    };
    public primaryYAxis: Object = {
        title: 'Revenue in Millions',
        minimum: 2,
        maximum: 5,
        interval: 1,
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 },
        labelFormat: '{value}M'
    };
    public title: string = 'Average Sales Comparison';
    constructor() {
        // code
    };

}
