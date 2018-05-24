import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-bulb-layout',
  templateUrl: './bulb-layout.component.html',
  animations: [
    trigger('flickeringBulb', [
      state('off', style({
        opacity: 0
      })),
      state('on', style({
        opacity: 1
      })),
      transition('off => on', animate(1800, keyframes([
        style({ opacity: 0 }),
        style({ opacity: 0.5 }),
        style({ opacity: 0 }),
        style({ opacity: 0.25 }),
        style({ opacity: 0.5 }),
        style({ opacity: 0 }),
        style({ opacity: 0 }),
        style({ opacity: 0 }),
        style({ opacity: 1 }),
        style({ opacity: 1 }),
        style({ opacity: 1 }),
        style({ opacity: 1 }),
        style({ opacity: 1 }),
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 0.5 }),
        style({ opacity: 0 }),
        style({ opacity: 0.25 }),
        style({ opacity: 0.5 }),
        style({ opacity: 0 }),
        style({ opacity: 0 }),
        style({ opacity: 0 }),
        style({ opacity: 1 })
      ])
      )),
    ])
  ],
})
export class BulbLayoutComponent implements OnInit, AfterViewInit {
  public flicker = 'off';
  public bulbState;
  public bulbStateSrc;

  constructor() { }

  ngOnInit() {
    this.setBulbState('default');
  }

  ngAfterViewInit() {
    // setTimeout(() => this.setBulbState('failure'), 400);
  }

  setBulbState(condition: string): void {
    this.bulbState = condition;
    switch (condition) {
      case 'success':
        (this.flicker = 'on', this.bulbStateSrc = 'assets/images/bulb-solid.png');
        break;
      case 'failure':
        (this.flicker = 'off', this.bulbStateSrc = 'assets/images/bulb-transparent.png');
        break;
      default:
        (this.flicker = 'off', this.bulbStateSrc = 'assets/images/bulb-transparent.png');
        break;
    }
  }

}
