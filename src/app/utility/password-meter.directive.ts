import { Directive, ElementRef, Input, EventEmitter, Renderer2, Optional, Renderer } from '@angular/core';
import { NgModel } from '@angular/forms';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
    selector: '[passwordMeter]',
    host: {
        '[class.bg-danger]': 'meterStrength=="poor"',
        '[class.bg-warning]': 'meterStrength=="weak"',
        '[class.bg-info]': 'meterStrength=="good"',
        '[class.bg-success]': 'meterStrength=="strong"',
        '[style.width]': 'score',
        '[innerText]': 'meterStrength',
    }
})
export class PasswordMeterDirective implements OnChanges {
    @Input() passwordMeter: NgModel;
    progressLoading = false;
    meterStrength = "";
    score = "";
    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) {

    }

    ngOnChanges() {
        this.meterStrength = this.checkPassStrength(this.passwordMeter);
    }
    scorePassword(pass) {
        let score = 0;
        if (!pass)
            return score;

        // award every unique letter until 5 repetitions
        var letters = new Object();
        for (var i = 0; i < pass.length; i++) {
            letters[pass[i]] = (letters[pass[i]] || 0) + 1;
            score += 5.0 / letters[pass[i]];
        }

        // bonus points for mixing it up
        var variations = {
            digits: /\d/.test(pass),
            lower: /[a-z]/.test(pass),
            upper: /[A-Z]/.test(pass),
            nonWords: /\W/.test(pass),
        }

        let variationCount = 0;
        for (var check in variations) {
            variationCount += (variations[check] == true) ? 1 : 0;
        }
        score += (variationCount - 1) * 10;

        return score;
    }

    checkPassStrength(pass) {
        let score = this.scorePassword(pass);
        this.score = score + '%';
        if (score > 75)
            return "strong";
        if (score > 50)
            return "good";
        if (score >= 25)
            return "weak";
        if (score >= 0)
            return "poor";
        return "";
    }
}