import {
    trigger, transition, animate, style, state,
    keyframes, query, group, sequence, animateChild
} from '@angular/animations';
import { AnimationEntryMetadata } from '@angular/core';

export function FADE_IN_SCALEUP(): AnimationEntryMetadata {
    return trigger('fadeInScaleUp', [
        transition(':enter', [
            style({ transform: 'scale(0.8)', opacity: 0 }),
            animate('.2s', style({ transform: 'scale(1.0)', opacity: 1 }))
        ])
    ])
};


export function SLIDE_IN_OUT(): AnimationEntryMetadata {
    return trigger('slideInOutAnimation', [
        transition('* => *', [
            query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
            query(':enter', style({ transform: 'translateX(100%)' }), { optional: true }),
            sequence([
                query(':leave', animateChild(), { optional: true }),
                group([
                    query(':leave', [
                        style({ transform: 'translateX(0%)' }),
                        animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                            style({ transform: 'translateX(-100%)' }))
                    ], { optional: true }),
                    query(':enter', [
                        style({ transform: 'translateX(100%)' }),
                        animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                            style({ transform: 'translateX(0%)' })),
                    ], { optional: true }),
                ]),
                query(':enter', animateChild(), { optional: true }),
            ])
        ])
    ]);
};
// Component transition animations
export function SLIDE_IN_DOWN(): AnimationEntryMetadata {
    return trigger('slideInDownAnimation', [
        state('*',
            style({
                opacity: 1,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.2s ease-in')
        ]),
        transition(':leave', [
            animate('0.5s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}

export function SLIDE_IN_LEFT(): AnimationEntryMetadata {
    return trigger('slideInLeftAnimation', [
        state('* <=> *',
            style({
                opacity: 0,
                transform: 'translateX(0)'
            })
        ),
        transition(':enter', [
            style({
                opacity: 0,
                transform: 'translateX(-100%)'
            }),
            animate('0.4s ease-in')
        ]),
        transition(':leave', [
            animate('0.8s ease-out', style({
                opacity: 0,
                transform: 'translateY(100%)'
            }))
        ])
    ]);
}
