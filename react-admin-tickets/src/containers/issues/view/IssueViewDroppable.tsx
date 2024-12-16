import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { IssueViewDroppableProps } from "./IssueView.type";
import Menus from "@/components/Menus/index";
import IssueViewDraggable from "./IssueViewDraggable";
import IssueUtilDroppableMenu from "../utils/IssueUtilDroppableMenu";

const IssueViewDroppable: React.FC<IssueViewDroppableProps> = ({
  statusIssue,
  issueList = null,
}: any) => {
  return (
    <Droppable droppableId={`${statusIssue.id}`}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            backgroundColor: statusIssue && statusIssue?.bg? statusIssue?.bg : "#f4f5f7",
            padding: "1rem",
            width: "300px",
            borderRadius: "8px",
          }}
        >
          <h3 className="flex items-center justity-between text-slate-400 text-sm capitalize font-medium mb-4 w-full">
            <span className="mr-auto">{statusIssue.title}</span>
            <Menus
              iconButton={
                <MoreHorizIcon className="text-slate-400" fontSize="small" />
              }
            >
              <IssueUtilDroppableMenu statusIssue={statusIssue} />
            </Menus>
          </h3>

          {issueList &&
            issueList[`${statusIssue.id}`]?.map((workspace: any) => {
              return (
                <IssueViewDraggable
                  key={workspace.id}
                  workspace={workspace}
                  index={workspace.id}
                />
              );
            })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default IssueViewDroppable;
