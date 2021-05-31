import { Component, Input } from '@angular/core';
import { LoadingState, LoadingStates } from './loading-state.types';

@Component({
    selector: 'app-loading-state-container',
    templateUrl: './loading-state-container.component.html'
})
export class LoadingStateContainerComponent {
    @Input() loadingState: LoadingState<any>;

    LoadingStates = LoadingStates;
}
