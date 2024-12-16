import React from "react";

export interface DrawersRightProps {
    closeDrawer?: () => void;
    children?: React.ReactNode;
    open?: boolean;
    title?: string;
}
