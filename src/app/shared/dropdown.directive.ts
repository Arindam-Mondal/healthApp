import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

// This is a custom directive to open and close a directive. 
// We are not using bootstap js file so we will use our own directive.
export class DropDwonDirective {
    // Binding to css class open using HostBinding and initially setting the value to false.
    @HostBinding('class.open') isOpen = false;
    
    // Listening to the click event using HostListener
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}