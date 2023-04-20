import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/tabs/qr',
        pathMatch: 'full',
    },
    {
        path: '',
        component: TabsPage,
        children: [
            {
                path: 'qr',
                loadChildren: () => import('../qr/qr.module').then(m => m.QrPageModule)
            },
            {
                path: 'ocr',
                loadChildren: () => import('../ocr/ocr.module').then(m => m.OcrPageModule)
            },
            {
                path: 'bar',
                loadChildren: () => import('../bar/bar.module').then(m => m.BarPageModule)
            },
            {
                path: 'pdf417',
                loadChildren: () => import('../pdf417/pdf417.module').then(m => m.Pdf417PageModule)
            },
            {
                path: 'report',
                loadChildren: () => import('../report/report.module').then(m => m.ReportPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }
