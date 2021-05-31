import { Component } from '@angular/core';

export enum LoadingStates {
    Pending,
    Loading,
    Success,
    Failure
}

export interface LoadingState<T> {
    type: LoadingStates;
    value?: T;
}

export const LoadingStateOf = {
    pending: () => ({ type: LoadingStates.Pending }),
    loading: () => ({ type: LoadingStates.Loading }),
    success: <T>(value: T) => ({ type: LoadingStates.Success, value }),
    failure: () => ({ type: LoadingStates.Failure }),
    map: <T, U>(ls: LoadingState<T>, fn: ((value: T) => U)) =>
        ({ type: ls.type, value: ls.value !== undefined ? fn(ls.value) : ls.value })
};
