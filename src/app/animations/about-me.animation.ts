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

export const floatInFromBottom = trigger('floatInFromBottom', [
  state('open', style({
    opacity: 1,
    transform: 'translate(0, 0)',
  })),
  state('close', style({
    opacity: 0,
    transform: 'translate(0, 50%)',
  })),
  state('close1', style({
    opacity: 0,
    transform: 'translate(0, 50%)',
  })),
  state('close2', style({
    opacity: 0,
    transform: 'translate(0, 50%)',
  })),
  state('close3', style({
    opacity: 0,
    transform: 'translate(0, 50%)',
  })),
  transition('open => *', [animate('1s ease-in')]),
  transition('close => open', [animate('1s ease-out')]),
  transition('close1 => open', [animate('1s 100ms ease-out')]),
  transition('close2 => open', [animate('1s 200ms ease-out')]),
  transition('close3 => open', [animate('1s 300ms ease-out')]),
]);
