import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import { IssueViewDraggableProps } from "./IssueView.type";

const IssueViewDraggable: React.FC<IssueViewDraggableProps> = ({
  workspace,
  index,
}: any) => {
  return (
    <Draggable draggableId={`${workspace.id}`} index={index}>
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

export default IssueViewDraggable;