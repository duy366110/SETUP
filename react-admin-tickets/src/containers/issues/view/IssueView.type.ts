export interface IssueViewDroppableProps {
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