import {
    Component, OnInit, OnDestroy, Input, ViewEncapsulation,
    HostListener, Inject, AfterViewInit, EventEmitter, forwardRef, HostBinding, ViewChild
} from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { FLY_IN_OUT_LIST } from '../../config/animations';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { StarwarsService } from '../../services/starwars.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Observable } from 'rxjs/Observable';
import { Person } from '../../models/person';
@Component({
    templateUrl: './home.component.html',
    styleUrls: [
        './home.scss'
    ],
    encapsulation: ViewEncapsulation.None,
    animations: [
        FLY_IN_OUT_LIST()
    ]
})
export class HomeComponent implements OnInit, OnDestroy {
    model: any = {};
    public subscription: Subscription;
    public progressEmitter = new EventEmitter();
    public people$: Observable<Person>;
    public searchOverlay = false;
    public itemsCount = 0;
    @ViewChild('searchForm') form: NgForm;

    constructor(
        private router: Router,
        private starwarsService: StarwarsService
    ) { }

    ngOnInit(): void {
        this.initPeople();
    }

    searchType(query) {
        if (query === '') {
            this.initPeople();
        }
    }

    initPeople() {
        this.people$ = this.starwarsService.people()
            .do((response: any) => this.setCurrentPageCount(response.results.length, response.next, response.count));
    }

    setSearchOverlayStatus(status) {
        this.searchOverlay = status;
    }

    onSubmit(form: NgForm) {
        this.setSearchOverlayStatus(false);
        const person: Person = new Person().deserialize(form.value);
        this.people$ = this.starwarsService.findPeople(person.name)
            .do((response: any) => this.setCurrentPageCount(response.results.length, response.next, response.count));
    }

    gotoDetails(url: string) {
        const urlId = this.starwarsService.getPersonIdFromUrl(url);
        this.router.navigate(['/details', urlId])
    }

    loadPage(url: string) {
        const pageNumber = this.starwarsService.getPageNumberFromUrl(url);
        this.people$ = this.starwarsService.people(pageNumber)
            .do((response: any) => this.setCurrentPageCount(response.results.length, response.next, response.count));
    }

    setCurrentPageCount(items, url, totalCount) {
        if (url === null) {
            this.itemsCount = totalCount;
            return;
        }
        const pageNumber = this.starwarsService.getPageNumberFromUrl(url);
        this.itemsCount = items * (pageNumber - 1);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
