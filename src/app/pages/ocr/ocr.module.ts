import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { OcrPageRoutingModule } from './ocr-routing.module';
import { OcrPage } from './ocr.page';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        OcrPageRoutingModule,
        FormsModule
    ],
    declarations: [OcrPage]
})
export class OcrPageModule { }
