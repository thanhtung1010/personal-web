import { animate, state, style, transition, trigger } from "@angular/animations";

const menuEnterTransition = transition(':enter', [
  style({
    transform: 'translate(calc(-100% + 20px), 0)',
  }),
  animate('1s ease-out', style({
    transform: 'translate(0, 0)',
  }))
]);

export const menuFloatIn = trigger('menuFloatIn', [menuEnterTransition]);

const menuLeaveTransition = transition(':leave', [
  style({
    transform: 'translate(0, 0)',
  }),
  animate('1s ease-in', style({
    transform: 'translate(-100%, -0)',
  }))
]);

export const menuFloatOut = trigger('menuFloatOut', [menuLeaveTransition]);

export const menuFloatInOut = trigger('menuFloatInOut', [
  state('open', style({
    transform: 'translate(0, 0)',
  })),
  state('close', style({
    transform: 'translate(-100%, -0)',
  })),
  transition('open => close', [animate('1s ease-in')]),
  transition('close => open', [animate('1s ease-out')]),
]);
