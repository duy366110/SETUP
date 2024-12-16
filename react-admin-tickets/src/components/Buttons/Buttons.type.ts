import React from "react";

export interface ButtonsProps {
    children?: React.ReactNode;
    className?: string;
    click?: () => void;
}