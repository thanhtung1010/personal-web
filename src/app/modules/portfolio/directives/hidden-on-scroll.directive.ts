import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2 } from "@angular/core";
import { Observable, Subject, distinctUntilChanged, filter, fromEvent, map, pairwise, share, takeUntil, throttleTime } from "rxjs";

@Directive({
  selector: '[tt-hidden-on-scroll]'
})

export class HiddenOnSrollDirective implements OnDestroy, OnInit {
  @Input() hideOnScroll: 'Down' | 'Up' = 'Down';
  @Input() classNameWhenHidden: string = '';
  @Input() propertyUsedToHide: 'transform' | 'top' | 'bottom' | 'height' = 'transform';
  @Input() valueWhenHidden: string = 'translateY(-100%)';
  @Input() valueWhenShown: string = 'translateY(0)';
  @Input() scrollElement: string = '';

  @Output() eventElementHidden = new EventEmitter<void>();
  @Output() eventElementShown = new EventEmitter<void>();

  private scrollingElement!: HTMLElement;
  private unsubscribeNotifier: Subject<number> = new Subject();
  private scrollEvent!: Observable<any>;
  private scrollUp!: Observable<any>;
  private scrollDown!: Observable<any>;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private renderer2: Renderer2,
  ) {}

  ngOnInit(): void {
    // this.scrollingElement = !this.scrollElement ? this.getDefaultScrollingElement() : document.querySelector(this.scrollElement) as HTMLElement;

    // if (!this.scrollingElement) {
    //   console.error(`NgxHideOnScroll: @Input() scrollElement\nElement with selector: "${this.scrollElement}" not found.`);
    // } else {
    //   this.scrollEvent = fromEvent(this.scrollingElement, 'scroll', { capture: true })
    //   .pipe(
    //     takeUntil(this.unsubscribeNotifier),
    //     throttleTime(50),
    //     map(() => {
    //       console.log(this.scrollingElement.scrollTop);
    //       return this.scrollingElement.scrollTop;
    //     }),
    //     pairwise(),
    //     map(([y1, y2]): ScrollDirection => (y2 < y1 ? ScrollDirection.Up : ScrollDirection.Down)),
    //     distinctUntilChanged()
    //   );

    //   this.scrollUp = this.scrollEvent.pipe(
    //     filter(direction => direction === ScrollDirection.Up)
    //   );

    //   this.scrollDown = this.scrollEvent.pipe(
    //     filter(direction => direction === ScrollDirection.Down)
    //   );
    // }

    // if (this.scrollEvent) {
    //   this.scrollEvent.subscribe(resp => {
    //     console.log(resp)
    //   })
    // }
    // if (this.scrollUp) {
    //   this.scrollUp.subscribe(() => this.scrollUpAction());
    // }
    // if (this.scrollDown) {
    //   this.scrollDown.subscribe(() => this.scrollDownAction());
    // }
  }

  ngOnDestroy(): void {
    this.unsubscribeNotifier.next(Date.now());
    this.unsubscribeNotifier.complete();
  }

  private scrollUpAction() {
    this.hideOnScroll === 'Up' ? this.hideElement() : this.showElement();
  }

  private scrollDownAction() {
    this.hideOnScroll === 'Up' ? this.showElement() : this.hideElement();
  }

  private hideElement(): void {
    const nativeElement = this.elementRef.nativeElement;
    if (this.classNameWhenHidden) {
      this.renderer2.addClass(nativeElement, this.classNameWhenHidden);
    } else {
      this.renderer2.setStyle(nativeElement, this.propertyUsedToHide, this.valueWhenHidden);
    }
    this.eventElementHidden.emit();
  }

  private showElement(): void {
    const nativeElement = this.elementRef.nativeElement;
    if (this.classNameWhenHidden) {
      this.renderer2.removeClass(nativeElement, this.classNameWhenHidden);
    } else {
      this.renderer2.setStyle(nativeElement, this.propertyUsedToHide, this.valueWhenShown);
    }
    this.eventElementShown.emit();
  }

  private getDefaultScrollingElement(): HTMLElement {
    return (document.scrollingElement || document.documentElement) as HTMLElement;
  }
}

enum ScrollDirection {
  Up = 'Up',
  Down = 'Down'
}
