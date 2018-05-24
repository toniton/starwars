import { Directive, ElementRef, Input, EventEmitter, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[loadingButton]',
    host: {
        '[class.btn-spin-loading]': 'progressLoading',
        '[class.disabled]': 'progressLoading'
    }
})
export class LoadingButtonDirective implements OnInit {
    progressLoading = false;
    @Input() changeState: EventEmitter<any>;

    constructor(el: ElementRef, renderer: Renderer2, ) {
        // el.nativeElement.style.backgroundColor = 'yellow';
    }

    ngOnInit() {
        this.changeState.subscribe((event) => {
            switch (event) {
                case ('start'):
                    this.progressLoading = true;
                    break;
                default:
                    this.progressLoading = false;
                    break;
            }
        });
    }
}
