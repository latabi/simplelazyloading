import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
     LayoutComponent
  ],
  imports: [
    
    CommonModule,
    LayoutRoutingModule 
  ],
  providers: [],
 
})
export class LayoutModule { }
