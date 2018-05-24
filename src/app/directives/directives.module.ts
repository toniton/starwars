import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrimDirective } from '../directives/trim.directive';
import { NumbersOnlyDirective } from '../directives/numbers-only.directive';
import { EqualValidator } from '../directives/equal-validator.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TrimDirective, NumbersOnlyDirective, EqualValidator],
  exports: [TrimDirective, NumbersOnlyDirective, EqualValidator]
})
export class DirectivesModule { }
