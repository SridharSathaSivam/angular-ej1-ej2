/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // EJ2 libraries
            '@syncfusion/ej2-ng-base': 'npm:@syncfusion/ej2-ng-base/dist/ej2-ng-base.umd.min.js',
            '@syncfusion/ej2-ng-charts': 'npm:@syncfusion/ej2-ng-charts/dist/ej2-ng-charts.umd.min.js',
            '@syncfusion/ej2-charts': 'npm:@syncfusion/ej2-charts/dist/ej2-charts.umd.min.js',
            '@syncfusion/ej2-base': 'npm:@syncfusion/ej2-base/dist/ej2-base.umd.min.js',
            '@syncfusion/ej2-data': 'npm:@syncfusion/ej2-data/dist/ej2-data.umd.min.js',

            'ej-angular2': 'npm:ej-angular2',
            'syncfusion-javascript': 'npm:syncfusion-javascript',
            'jsrender': 'npm:jsrender/jsrender.min.js',
            'jquery': 'npm:jquery/dist/jquery.min.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'

        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'systemjs-angular-loader.js'
                    }
                }
            },
            'ej-angular2': {
                defaultExtension: 'js'
            },
            'syncfusion-javascript': {
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);