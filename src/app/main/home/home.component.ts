import {
    Component, OnInit, OnDestroy, Input, ViewEncapsulation,
    HostListener, Inject, AfterViewInit, EventEmitter, forwardRef, HostBinding, ViewChild
} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { SLIDE_IN_OUT, FLY_IN_OUT, FLY_IN_OUT_LIST } from '../../config/animations';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { StarwarsService } from '../../services/starwars.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    animations: [
        SLIDE_IN_OUT(),
        FLY_IN_OUT(),
        FLY_IN_OUT_LIST()
    ]
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    validating = false;
    validateObserver: any;
    model: any = {};
    public user: any;
    public subscription: Subscription;
    public progressEmitter = new EventEmitter();
    public progressLoading = false;
    public locationLoading = false;
    public people$: Observable<any>;
    public searchOverlay = false;
    public itemsCount = 0;
    @ViewChild('searchForm') form: NgForm;
    @HostBinding('@slideInOutAnimation') slideInOutAnimation;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private starwarsService: StarwarsService
    ) { }

    ngOnInit(): void {
        this.initPeople();
    }

    ngAfterViewInit(): void {
    }

    initPeople() {
        this.people$ = this.starwarsService.people()
        .do((response: any) => this.setCurrentPageCount(response.results.length, response.next, response.count));
    }

    setSearchOverlayStatus(status) {
        this.searchOverlay = status;
    }

    onSubmit(form: NgForm) {
        const data: any = form.value;
        this.people$ = this.starwarsService.findPeople(data.person)
        .do((response: any) => this.setCurrentPageCount(response.results.length, response.next, response.count));
    }

    gotoDetails(url: string) {
        const urlId = url.replace('https://swapi.co/api/people/', '').replace('/', '');
        this.router.navigate(['/details', urlId])
    }

    loadPage(url: string) {
        const pageNumber = url.replace('https://swapi.co/api/people/?page=', '');
        this.people$ = this.starwarsService.people(pageNumber)
        .do((response: any) => this.setCurrentPageCount(response.results.length, response.next, response.count));
    }

    setCurrentPageCount(items, url, totalCount) {
        if (url === null) {
            this.itemsCount = totalCount;
            return;
        }
        const pageNumber = url.replace('https://swapi.co/api/people/?page=', '');
        this.itemsCount = items * (pageNumber - 1);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
