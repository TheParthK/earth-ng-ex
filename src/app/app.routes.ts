import { Routes } from '@angular/router';
import { Counter } from './counter/counter';
import { App } from './app';
import { DataBinding } from './data-binding/data-binding';

export const routes: Routes = [
    { path: "", component: App },
    { path: "counter", component: Counter },
    { path: "data-binding", component: DataBinding }
];
