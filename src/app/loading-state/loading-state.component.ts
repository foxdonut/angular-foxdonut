import { Component } from '@angular/core';

enum LoadingStates {
    Pending,
    Loading
}

type LoadingState<T> = LoadingStates | T;

@Component({
    selector: 'app-loading-state',
    templateUrl: './loading-state.component.html'
})
export class LoadingStateComponent {
    LoadingStates = LoadingStates;
    items: LoadingState<string[]> = LoadingStates.Pending;

    startLoad(): void {
        this.items = LoadingStates.Loading;
    }

    completeLoad(): void {
        this.items = ['One', 'Two', 'Three', 'Go'];
    }

    restart(): void {
        this.items = LoadingStates.Pending;
    }
}
