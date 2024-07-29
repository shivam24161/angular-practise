import { Routes } from '@angular/router';
import { NgIfComponent } from './ng-if/ng-if.component';
import { Component1Component } from './component1/component1.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { GetApiComponentComponent } from './get-api-component/get-api-component.component';
import { PostApiComponent } from './post-api/post-api.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { InjectableComponent } from './injectable/injectable.component';
import { PipesComponentComponent } from './pipes-component/pipes-component.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

export const routes: Routes = [
    {
        path:"ngIf",
        component:NgIfComponent
    },
    {
        path:"basic",
        component:Component1Component
    },
    {
        path:"controlFlow",
        component:ControlFlowComponent
    },
    {
        path:"getApi",
        component:GetApiComponentComponent
    },
    {
        path:"postApi",
        component:PostApiComponent
    },
    {
        path:"inputOutput",
        component:InputOutputComponent
    },
    {
        path:"injectable",
        component:InjectableComponent
    },
    {
        path:"pipes",
        component:PipesComponentComponent
    },
    {
        path:"lifecycle",
        component:LifecycleComponent
    }
];
