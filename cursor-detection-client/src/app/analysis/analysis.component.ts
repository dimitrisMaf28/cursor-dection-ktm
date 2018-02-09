import { Component } from '@angular/core';

import { PredictService } from '../services/predict.service';
import { CalculateResultsService } from '../services/calculate-results.service';
import { AnalysisResultsService } from '../services/analysis-results.service';
declare let moment: any;
declare let c3: any;

@Component({
    moduleId: module.id,
    selector: 'app-analysis',
    templateUrl: './analysis.component.html',
    styleUrls: ['./analysis.component.css'],
    providers: [CalculateResultsService]
})
export class AnalysisComponent {
    chartFlag = 0;
    selected = '90';
    selectedTab = 0;
    results: any = null;

    constructor(
      private predictService: PredictService,
      private calculateResultsService: CalculateResultsService,
      private analysisResultsService: AnalysisResultsService,
    ) {}

    calculateResults() {
        const experimentType = this.selectedTab ? 'fake_news' : 'table';
        this.calculateResultsService.get(this.selected, experimentType).subscribe(
            data => {
                console.log(data);
            },
            err => console.log(err)
        );
    }

    analysisResults() {
        this.results = null;
        const verifiedResultsCollectionName = this.selectedTab ? 'verifiedFinalResults' : 'verifiedResults';
        this.analysisResultsService.get(verifiedResultsCollectionName).subscribe(
            data => {
                this.results = data;
            },
            err => console.log(err)
        );
    }

}
