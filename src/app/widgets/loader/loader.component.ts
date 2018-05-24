import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, NavigationCancel, NavigationStart } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { loadingMessages } from '../../config/loading-messages';
import { LoaderService } from '../../widgets/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('show', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(100, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(150, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class LoaderComponent implements OnInit, AfterViewInit {
  public pageLoading = true;
  currentLoaderIndex = -1;
  subscription: any;
  interval: any;
  messages: string[] = loadingMessages;
  message = 'loading...';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.loaderService.getLoadingState().subscribe((showLoading) => {
      setTimeout(() => {
        showLoading === true ? this.getLoadingMessage() : clearInterval(this.interval);
        this.pageLoading = showLoading;
      }, 100)
    });
    this.router.events
      .filter((event) => event instanceof NavigationStart)
      .map(() => this.activatedRoute)
      .subscribe(() => {
        this.loaderService.getLoadingState().next(true);
      })
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe(() => {
        this.loaderService.getLoadingState().next(false);
      })
    this.router.events
      .filter((event) => event instanceof NavigationCancel)
      .subscribe(() => {
        this.loaderService.getLoadingState().next(false);
        this.message = 'page encountered error while loading';
      })
  }

  ngAfterViewInit() {
    this.getLoadingMessage();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentLoaderIndex = Math.floor(Math.random() * (this.messages.length - 0 + 1)) + 0;
    this.message = this.messages[this.currentLoaderIndex];
  }

  getLoadingMessage() {
    this.loadComponent();
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 5000);
  }

}
