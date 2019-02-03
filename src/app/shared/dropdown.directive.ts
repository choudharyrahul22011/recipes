import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[recipeDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  constructor() { }

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
  }

}
