import {
  Component, ViewEncapsulation,
  OnInit, OnChanges, SimpleChanges, Inject, forwardRef,
  ElementRef, ViewChild
} from '@angular/core';
import { ActivatedRoute, Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-body',
  templateUrl: './partial-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [
    { provide: 'WindowObject', useValue: window }
  ]
})
export class PartialLayoutComponent implements OnInit {
  public contactForm: any = {};
  public user: any;
  public disabled = false;
  public reachUsSliderVisible = false;
  public status: { isopen: boolean } = { isopen: false };
  private subscription: Subscription;

  constructor(
    @Inject('WindowObject') private _window: Window,
    private route: ActivatedRoute,
    private router: Router
  ) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        // You only receive NavigationStart events
      });
  }

  ngOnInit(): void {
  }

  scrollTo(yPoint: number, duration: number): any {
    setTimeout(() => {
      this._window.scrollTo(0, yPoint)
    }, duration);
    return;
  }

  smoothScroll(eID: any): void {
    const startY = this.currentYPosition();
    const stopY = this.elmYPosition(eID);
    const distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      this._window.scrollTo(0, stopY); return;
    }
    let speed = Math.round(distance / 100);
    if (speed >= 20) { speed = 20; }
    const step = Math.round(distance / 100);
    let leapY = stopY > startY ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
      for (let i = startY; i < stopY; i += step) {
        this.scrollTo(leapY, timer * speed);
        leapY += step; if (leapY > stopY) { leapY = stopY; } timer++;
      } return;
    }
    for (let i = startY; i > stopY; i -= step) {
      this.scrollTo(leapY, timer * speed);
      leapY -= step; if (leapY < stopY) { leapY = stopY; } timer++;
    }
  }

  currentYPosition(): any {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) { return self.pageYOffset; }
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop) {
      return document.documentElement.scrollTop;
    }
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) { return document.body.scrollTop; }
    return 0;
  }

  elmYPosition(eID): any {
    const elm = document.getElementById(eID);
    let y = elm.offsetTop;
    let node: any = elm;
    while (node.offsetParent && node.offsetParent !== document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }
}
