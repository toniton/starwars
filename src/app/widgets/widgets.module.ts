import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModule } from '../widgets/alert/alert.module';
import { LoaderModule } from '../widgets/loader/loader.module';
import { BadgeComponent } from './badge/badge.component';

@NgModule({
  imports: [
    CommonModule,
    AlertModule,
    LoaderModule
  ],
  declarations: [BadgeComponent],
  exports: [
    BadgeComponent,
    AlertModule,
    LoaderModule
  ]
})
export class WidgetsModule { }
