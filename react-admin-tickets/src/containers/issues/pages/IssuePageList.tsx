import { useState, useEffect } from "react";
import { useUpdate, useReference, useGetList } from "react-admin";
import { DragDropContext } from "@hello-pangea/dnd";

import DrawerRight from "@/components/Drawers/DrawerRight";
import IssueViewDroppable from "../view/IssueViewDroppable";
import IssueViewCreate from "../view/IssueViewCreate";

const IssuePageList = () => {
  const { referenceRecord: issues } = useReference<any>({
    reference: "issues",
    id: 1,
  });

  const { data: isseusStaus } = useGetList<any>("issues-status", {
    filter: { issueId: issues?.id },
    // sort: { field: 'date', order: 'DESC' },
    // pagination: { page: 1, perPage: 50 },
  });

  const { data: isseusDatas } = useGetList<any>("issues-datas", {
    filter: { issueId: issues?.id },
    // sort: { field: 'date', order: 'DESC' },
    // pagination: { page: 1, perPage: 50 },
  });

  const [update] = useUpdate("board");
  const [issueList, setIssueList] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const setUpWorkspaces = () => {
    let result: any = {};
    
    isseusStaus?.forEach((statusIssue: any) => {
      result[`${statusIssue.id}`] = [];
    });

    isseusDatas?.forEach((item: any) => {
      const key = isseusStaus?.find((key: any) => key.id === item.statusId);
      if (key) {
        result[`${key.id}`].push(item);
      }
    });

    setIssueList(result);
  };

  useEffect(() => {
    if (issues && isseusDatas?.length) {
      setUpWorkspaces();
    }
  }, [issues, isseusStaus, isseusDatas]);

  const upload = async (data: any) => {
    try {
      await update(
        "issues",
        { id: issues.id, data },
        {
          onSuccess: () => {
            setUpWorkspaces();
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  const onDragEnd = (result: any) => {
    const { source, draggableId, destination } = result;

    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      let payload: any = {};
      Object.assign(payload, issues);

      payload.items = isseusDatas?.map((item: any) => {
        if (item.id === Number(draggableId)) {
          item.statusId = Number(destination.droppableId);
        }
        return item;
      });

      upload(payload);
    }
  };

  const onOpenDrawerIssue = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawerIssue = () => {
    setOpenDrawer(false);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {isseusStaus?.map((statusIssue: any, index: number) => {
          return (
            <IssueViewDroppable
              key={statusIssue?.id}
              openDrawerIssue={onOpenDrawerIssue}
              statusIssue={statusIssue}
              issueList={issueList}
            />
          );
        })}

        {openDrawer && issues && issues?.id && (
          <DrawerRight
            closeDrawer={onCloseDrawerIssue}
            open={openDrawer}
            title="Create issue"
          >
            <IssueViewCreate closeDrawer={onCloseDrawerIssue} issueId={issues?.id} />
          </DrawerRight>
        )}
      </div>
    </DragDropContext>
  );
};

export default IssuePageList;
