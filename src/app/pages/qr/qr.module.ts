import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { QrPageRoutingModule } from './qr-routing.module';
import { QrPage } from './qr.page';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        QrPageRoutingModule,
        FormsModule
    ],
    declarations: [QrPage]
})
export class QrPageModule { }
