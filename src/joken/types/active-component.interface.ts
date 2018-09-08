import { ComponentRef } from '@angular/core';

export default interface ActiveComponent {
    componentReference: ComponentRef<{}>;
    domElement: HTMLElement;
}
