import { Injectable, ComponentFactoryResolver, Type, Injector, ApplicationRef, EmbeddedViewRef, ComponentRef } from '@angular/core';
import ActiveComponent from '../types/active-component.interface';

@Injectable({
    providedIn: 'root'
})
export default class DomService {

    private activeComponents: Map<string, ActiveComponent> = new Map();

    constructor(private componentFactory: ComponentFactoryResolver,
        private injector: Injector,
        private applicationReference: ApplicationRef) { }

    addComponent(component: Type<{}>, identifier: string, DOMIdToAppendComponent?: string) {
        const componentReference = this.componentFactory
            .resolveComponentFactory(component)
            .create(this.injector);

        this.applicationReference.attachView(componentReference.hostView);
        const domElement = (componentReference.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        this.activeComponents.set(identifier, { componentReference, domElement });

        domElement.classList.add(identifier);
        if (DOMIdToAppendComponent) {
            document.getElementById(DOMIdToAppendComponent).appendChild(domElement);
            return;
        }
        document.body.appendChild(domElement);
    }

    removeComponent(identifier: string) {
        const activeComponent = this.activeComponents.get(identifier);
        this.applicationReference
            .detachView(activeComponent.componentReference.hostView);
        activeComponent.domElement.remove();
    }

    removeAllComponents() {
        this.activeComponents.forEach((activeComponent: ActiveComponent, identifier) => {
            this.applicationReference.detachView(activeComponent.componentReference.hostView);
            activeComponent.domElement.remove();
        });
    }

}
