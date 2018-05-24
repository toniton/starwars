import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutingModule } from './details.routing';
import { ResidentComponent } from './resident/resident.component';

@NgModule({
  imports: [
    DetailsRoutingModule,
    CommonModule
  ],
  declarations: [DetailsComponent, ResidentComponent]
})
export class DetailsModule { }
