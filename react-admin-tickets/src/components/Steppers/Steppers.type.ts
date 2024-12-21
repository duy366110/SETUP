import React from "react";

export interface StepType {
    key: string;
    label: string;
}

export interface StepViewType {
    end?: boolean;
    first?: boolean;
    inputs?: Array<React.ReactNode | undefined | null>;
    valiad: Array<string>;
    views?: Array<React.ReactNode | undefined | null>;
}

export interface SteppersHorizontal {
    steps: Array<StepType>;
    stepperViews: Array<any>;
}

export interface SteppersType {
    resource: string;
    steps: Array<StepType>;
    stepperViews: Array<any>;
    type?: "horizontal" | "vertical";
}
