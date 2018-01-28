import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MatModule } from './mat.module';

import { AppComponent } from './app.component';
import { HoverableTableComponent } from './hoverable-table/hoverable-table.component';
import { VelocityChartComponent } from './velocity-chart/velocity-chart.component';
import { MakeTemplateComponent } from './make-template/make-template.component';
import { PredictionComponent } from './prediction/prediction.component';
import { FakeWebsiteComponent } from './fake-website/fake-website.component';

import { AddTemplateService } from './services/add-template.service';
import { PredictService } from './services/predict.service';

@NgModule({
    declarations: [
        AppComponent,
        HoverableTableComponent,
        VelocityChartComponent,
        MakeTemplateComponent,
        PredictionComponent,
        FakeWebsiteComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        MatModule,
    ],
    providers: [AddTemplateService, PredictService],
    bootstrap: [AppComponent]
})
export class AppModule { }
