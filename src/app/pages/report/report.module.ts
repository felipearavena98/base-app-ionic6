import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { ReportPageRoutingModule } from './report-routing.module';
import { ReportPage } from './report.page';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        ReportPageRoutingModule,
        FormsModule
    ],
    declarations: [ReportPage]
})
export class ReportPageModule { }
