import { useState, useEffect } from "react";
import { useUpdate, useReference, useGetList } from "react-admin";
import { DragDropContext } from "@hello-pangea/dnd";

import DrawerRight from "@/components/Drawers/DrawerRight";
import IssueViewDroppable from "../view/IssueViewDroppable";
import IssueViewCreate from "../view/IssueViewCreate";

const IssuePageList = () => {
  const { referenceRecord: board, isLoading } = useReference<any>({
    reference: "board",
    id: 1,
  });

  const { referenceRecord: issues } = useReference<any>({
    reference: "issues",
    id: 1,
  });

  const { data: isseusStaus } = useGetList<any>("issues-status", {
    filter: { boardId: board?.id },
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

    issues.items.forEach((item: any) => {
      const key = isseusStaus?.find((key: any) => key.id === item.branch);
      if (key) {
        result[`${key.id}`].push(item);
      }
    });

    setIssueList(result);
  };

  useEffect(() => {
    if (issues && issues.items.length) {
      setUpWorkspaces();
    }
  }, [issues, isseusStaus]);

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

      payload.items = issues.items.map((item: any) => {
        if (item.id === Number(draggableId)) {
          item.branch = Number(destination.droppableId);
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

        {openDrawer && (
          <DrawerRight
            closeDrawer={onCloseDrawerIssue}
            open={openDrawer}
            title="Create issue"
          >
            <IssueViewCreate />
          </DrawerRight>
        )}
      </div>
    </DragDropContext>
  );
};

export default IssuePageList;
