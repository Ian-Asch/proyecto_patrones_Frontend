import { Component, Injectable, Injector } from "@angular/core";
import { Imediadator } from "./IMediator";

@Injectable({
    providedIn: 'root',
})
export class ConcreteMediator implements Imediadator {

    private components: any = {};

    register(component: any) {
        this.components[component.constructor.name] = component;
    }

    notify(sender: Object, event: string, message: string): void {
        if (event == "ERRORRESPONSE") {
            this.components["ErrorResponseModal"]?.openModal(message);
        }
        if(event == "SUCCESSRESPONSE"){
            this.components["SuccessResponseModal"]?.openModal(message);
        }
    }
}