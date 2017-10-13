import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';


const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', loadChildren: './student/student.module#StudentModule' },

            { path: 'student', loadChildren: './student/student.module#StudentModule' },
            { path: 'classes', loadChildren: './classes/classes.module#ClassesModule' }
        ]

    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }