import {
    trigger,
    state,
    animate,
    transition,
    style,
    query
} from '@angular/animations';

export const fadeInWithColor =
// trigger name for attaching this animation to an element using the
// [@triggerName] syntax
trigger('fadeInWithColor', [// route 'enter' transition
    // route 'enter' transition
    transition(':enter', [
        // css styles at start of transition
        style({opacity: 0}),
        // animation and styles at end of transition
        animate('0.7s', style({opacity: 1, background: '#007bff'}))
    ]),
    transition(':leave', [
        // css styles at start of transition
        style({opacity: 1, background: '#007bff'}),
        // animation and styles at end of transition
        animate('0.7s', style({opacity: 0}))
    ]),
]);