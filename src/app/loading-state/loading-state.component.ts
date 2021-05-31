import { Component } from '@angular/core';
import { LoadingState, LoadingStateOf, LoadingStates } from './loading-state.types';

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
