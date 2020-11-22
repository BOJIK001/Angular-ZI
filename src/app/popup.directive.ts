import { Directive, HostListener, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appPopup]'
})
export class PopupDirective {
  constructor( private view: ViewContainerRef) { }

  @Input('appPopup') popupTemplate: TemplateRef<any>;

  @HostListener('mouseenter') onMouseEnter() {
    this.view.createEmbeddedView(this.popupTemplate);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.view.remove();
  }

}

