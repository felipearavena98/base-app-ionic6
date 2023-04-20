import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Pdf417PageRoutingModule } from './pdf417-routing.module';
import { Pdf417Page } from './pdf417.page';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        Pdf417PageRoutingModule,
        FormsModule
    ],
    declarations: [Pdf417Page]
})
export class Pdf417PageModule { }
