import React, { useEffect } from "react";
import { useTranslate } from "react-admin";
import { Droppable } from "@hello-pangea/dnd";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { IssueViewDroppableProps } from "./IssueView.type";

import Buttons from "@/components/Buttons/Buttons";
import Menus from "@/components/Menus/index";
import IssueViewDraggable from "./IssueViewDraggable";

const IssueViewDroppable: React.FC<IssueViewDroppableProps> = ({
  openDrawerIssue,
  statusIssue,
  issueList = null,
}: any) => {
  const t = useTranslate();

  return (
    <Droppable droppableId={`${statusIssue.id}`}>
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
            <span className="mr-auto">
              {statusIssue.title}
            </span>
            <Menus
              iconButton={
                <MoreHorizIcon className="text-slate-400" fontSize="small" />
              }
            />
          </h3>

          {issueList &&
            issueList[`${statusIssue.id}`]?.map((workspace: any, index: number) => {
              return (
                <IssueViewDraggable
                  key={workspace.id}
                  workspace={workspace}
                  index={workspace.id}
                />
              );
            })}

          {/* <div>
            <Buttons click={openDrawerIssue}>
              <AddIcon className="text-slate-400" fontSize="small" />
              <span className="leading-[100%]">Thêm mới sự cố</span>
            </Buttons>
          </div> */}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default IssueViewDroppable;
