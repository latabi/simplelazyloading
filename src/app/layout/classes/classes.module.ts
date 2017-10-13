import { NgModule } from '@angular/core';
import { ClassesRoutingModule } from "./classes-routing.module";
import { ClassesComponent } from "./classes.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
  ClassesComponent
  ],
  imports: [
    CommonModule,
    ClassesRoutingModule
  ],
  providers: []
 
})
export class ClassesModule { }
