export interface IssueViewDroppableProps {
    openDrawerIssue?: () => void;
    statusIssue: any;
    issueList: any;
}

export interface IssueViewDraggableProps {
    index: number;
    workspace: any,
}

export interface IssueViewCreateProps {
    issueId: number;
    closeDrawer?: () => void;
}