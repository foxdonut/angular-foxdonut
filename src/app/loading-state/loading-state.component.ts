import { Component } from '@angular/core';

enum LoadingStates {
    Pending,
    Loading,
    Success,
    Failure
}

interface LoadingState<T> {
    type: LoadingStates;
    value?: T;
}

const LoadingStateOf = {
    pending: () => ({ type: LoadingStates.Pending }),
    loading: () => ({ type: LoadingStates.Loading }),
    success: <T>(value: T) => ({ type: LoadingStates.Success, value }),
    failure: () => ({ type: LoadingStates.Failure }),
    map: <T, U>(ls: LoadingState<T>, fn: ((value: T) => U)) =>
        ({ type: ls.type, value: ls.value !== undefined ? fn(ls.value) : ls.value })
};

@Component({
    selector: 'app-loading-state',
    templateUrl: './loading-state.component.html'
})
export class LoadingStateComponent {
    LoadingStates = LoadingStates;
    items: LoadingState<string[]> = LoadingStateOf.pending();

    startLoad(): void {
        this.items = LoadingStateOf.loading();
    }

    completeLoad(): void {
        this.items = LoadingStateOf.success(['One', 'Two', 'Three', 'Go']);
    }

    restart(): void {
        this.items = LoadingStateOf.pending();
    }
}
