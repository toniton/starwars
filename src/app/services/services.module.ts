import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarwarsService } from './starwars.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        StarwarsService
    ]
})
export class ServicesModule { }
