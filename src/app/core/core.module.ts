import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullLayoutComponent } from '../core/layouts/full-layout/full-layout.component';
import { PartialLayoutComponent } from '../core/layouts/partial-layout/partial-layout.component';
import { RouterModule } from '@angular/router';
import { BulbFooterComponent } from './footers/bulb-footer/bulb-footer.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    FullLayoutComponent,
    PartialLayoutComponent,
    BulbFooterComponent,
    NotFoundComponent
  ],
  exports: [
    FullLayoutComponent,
    PartialLayoutComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
