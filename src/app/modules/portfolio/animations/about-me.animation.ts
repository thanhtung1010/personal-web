import { animate, state, style, transition, trigger } from "@angular/animations";

export const aboutMeLeftInOut = trigger('aboutMeLeftInOut', [
  state('open', style({
    opacity: 1,
    transform: 'translate(0, 0)',
  })),
  state('close', style({
    opacity: 0,
    transform: 'translate(-50%, 0)',
  })),
  transition('open => close', [animate('1s ease-in')]),
  transition('close => open', [animate('1s ease-out')]),
]);

export const aboutMeRightInOut = trigger('aboutMeRightInOut', [
  state('open', style({
    opacity: 1,
    transform: 'translate(0, 0)',
  })),
  state('close', style({
    opacity: 0,
    transform: 'translate(50%, 0)',
  })),
  transition('open => close', [animate('1s ease-in')]),
  transition('close => open', [animate('1s ease-out')]),
]);
