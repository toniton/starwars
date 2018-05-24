import {
    Component, OnInit, OnDestroy, Input, ViewEncapsulation,
    HostListener, Inject, AfterViewInit, EventEmitter, forwardRef, HostBinding, ViewChild
} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { SLIDE_IN_OUT } from '../../config/animations';
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
        trigger('flyInOut', [
            state('', style({ opacity: 1, transform: 'translateY(0)' })),
            transition('void => *', [
                style({
                    opacity: 0,
                    transform: 'translateY(15%)'
                }),
                animate('0.4s ease-in')
            ]),
            transition('* => void', [
                animate('0.4s 0.2s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(-50%)'
                }))
            ])
        ])
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
        this.people$ = this.starwarsService.people();
    }

    onSubmit(form: NgForm) {
        const data: any = form.value;
        this.people$ = this.starwarsService.findPeople(data.person);
    }

    gotoDetails(url: string) {
        const urlId = url.replace('https://swapi.co/api/people/', '').replace('/', '');
        this.router.navigate(['/details', urlId])
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
