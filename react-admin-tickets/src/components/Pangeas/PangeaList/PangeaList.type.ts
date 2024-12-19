export interface PangeaListProps {
  dragContent: (params: any) => any;
  dragEnd: (result: any) => void;
  workList: any;
  workListMenu?: (params: any) => any;
  workItems: any;
}
