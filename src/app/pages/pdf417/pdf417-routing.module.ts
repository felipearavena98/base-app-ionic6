import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pdf417Page } from './pdf417.page';

const routes: Routes = [
    {
        path: '',
        component: Pdf417Page
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class Pdf417PageRoutingModule { }
