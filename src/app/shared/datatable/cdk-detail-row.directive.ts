import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[cdkDetailRow]',
})
export class CdkDetailRowDirective {
  private row: any;
  private tRef: TemplateRef<any> | undefined;
  private opened: boolean | undefined;

  @HostBinding('class.expanded')
  get expended(): boolean {
    return this.opened ?? false;
  }

  @Input()
  set cdkDetailRow(value: any) {
    if (value !== this.row) {
      this.row = value;
    }
  }

  @Input('cdkDetailRowTpl')
  set template(value: TemplateRef<any>) {
    if (value !== this.tRef) {
      this.tRef = value;
    }
  }

  constructor(public vcRef: ViewContainerRef) {}

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    if (event?.target?.className.indexOf('expandable') > -1) {
      this.toggle();
    }
  }

  toggle(): void {
    if (this.opened) {
      this.vcRef.clear();
    } else {
      this.render();
    }
    this.opened = this.vcRef.length > 0;
  }

  private render(): void {
    this.vcRef.clear();
    if (this.tRef && this.row) {
      this.vcRef.createEmbeddedView(this.tRef, { $implicit: this.row });
    }
  }
}
