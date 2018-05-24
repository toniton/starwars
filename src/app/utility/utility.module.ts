import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingButtonDirective } from '../utility/loading-button.directive';
import { PasswordMeterDirective } from '../utility/password-meter.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [LoadingButtonDirective, PasswordMeterDirective],
    exports: [LoadingButtonDirective, PasswordMeterDirective]
})
export class UtilityModule { }
