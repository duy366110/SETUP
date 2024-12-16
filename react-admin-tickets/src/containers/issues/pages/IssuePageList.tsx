import { useState, useEffect } from "react";
import { useUpdate, useTranslate, useReference } from "react-admin";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import Menus from "@/components/Menus/index";

const DraggableView = ({ workspace, index }: any) => {
  return (
    <Draggable  draggableId={workspace.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: "10px",
            marginBottom: "10px",
            backgroundColor: "white",
            borderRadius: "4px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            ...provided.draggableProps.style,
          }}
        >
          <p className="text-xs font-medium uppercase mb-2">
            {workspace.type}:
          </p>
          <h4 className="text-sm font-semibold line-clamp-1 mb-3">
            {workspace.title}
          </h4>
          <p className="text-sm line-clamp-4">{workspace.description}</p>
        </div>
      )}
    </Draggable>
  );
};

const DroppableView = ({ column, workspaces }: any) => {
  const t = useTranslate();

  return (
    
      <Droppable  droppableId={column}>
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              backgroundColor: "#f4f5f7",
              padding: "1rem",
              width: "300px",
              borderRadius: "8px",
            }}
          >
            <h3 className="flex items-center justity-between text-slate-400 text-sm capitalize font-medium mb-4 w-full">
              <span className="mr-auto">{t(`issue.common.${column}`)}</span>
              <Menus
                iconButton={<MoreHorizIcon className="text-slate-400" fontSize="small" />}
              />
            </h3>

            {workspaces &&
              workspaces[`${column}`]?.map((workspace: any, index: number) => {
                return <DraggableView key={workspace.id} workspace={workspace} index={index} />;
              })}


            <div>
              <AddIcon className="text-slate-400" fontSize="small" />
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  );
};

const IssuePageList = () => {
  const { referenceRecord: board, isLoading } = useReference<any>({
    reference: "board",
    id: 1,
  });

  const { referenceRecord: workspace } = useReference<any>({
    reference: "workspace",
    id: 1,
  });

  const [onBoard, setOnBoard] = useState<any>(null);
  const [update] = useUpdate("board");
  const [workspaces, setWorkspaces] = useState<any>(null);

  const setUpWorkspaces = () => {
    let result: any = {};

    board.keys.forEach((key: string) => {
      result[`${key}`] = [];
    });

    workspace.items.forEach((item: any) => {
      const key = board.keys.find((key: string) => key === item.branch);
      if (key) {
        result[key].push(item);
      }
    });
    setWorkspaces(result);
  };

  useEffect(() => {
    if (board) {
      setOnBoard(board);
    }
  }, [board]);

  useEffect(() => {
    if (workspace && workspace.items.length) {
      setUpWorkspaces();
    }
  }, [workspace]);

  const upload = async (data: any) => {
    try {
      await update(
        "workspace",
        { id: workspace.id, data },
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
      Object.assign(payload, workspace);

      payload.items = workspace.items.map((item: any) => {
        if (item.id === draggableId) {
          item.branch = destination.droppableId;
        }
        return item;
      });

      upload(payload);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {onBoard?.keys?.map((columnId: any, index: number) => {
          return <DroppableView key={columnId} column={columnId} workspaces={workspaces} />;
        })}
      </div>
    </DragDropContext>
  );
};

export default IssuePageList;
