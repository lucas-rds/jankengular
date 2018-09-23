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

    addComponent(component: Type<{}>, identifier: string, DOMIdToAppendComponent: string, data?: object) {
        const componentReference = this.componentFactory
            .resolveComponentFactory(component)
            .create(this.injector);

        this.applicationReference.attachView(componentReference.hostView);
        const domElement = (componentReference.hostView as EmbeddedViewRef<any>)
            .rootNodes[0] as HTMLElement;
        this.activeComponents.set(identifier, { componentReference, domElement });

        domElement.classList.add(identifier);
        document.getElementById(DOMIdToAppendComponent).appendChild(domElement);

        if (data) {
            Object.entries(data).forEach(([key, value]) => {
                componentReference.instance[key] = value;
            });
        }
    }

    updateComponentData(identifier: string, data: object) {
        const activeComponent = this.activeComponents.get(identifier);
        if (activeComponent) {
            Object.entries(data).forEach(([key, value]) => {
                activeComponent.componentReference.instance[key] = value;
            });
        }
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
