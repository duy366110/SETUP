import React, { useState, useEffect } from "react";
import { useGetList, useRedirect } from "react-admin";
import { Draggable } from "@hello-pangea/dnd";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import DivTheme from "@/components/Themes/DivTheme";
import { IssueViewDraggableProps } from "./IssueView.type";

const IssueViewDraggable: React.FC<IssueViewDraggableProps> = ({
  issue,
  index,
}: any) => {
  const { data: labels } = useGetList<any>("labels");
  const redirect = useRedirect();
  const [label, setLabel] = useState<any>(null);

  useEffect(() => {
    if (issue) {
      let label = labels?.find((label: any) => label.id === issue.label);
      setLabel(label);
    }
  }, [issue, labels]);

  const onRedirectEditPage = () => {
    redirect(`/issues/${issue.id}`);
  };

  return (
    <Draggable draggableId={`${issue.id}`} index={index}>
      {(provided) => (
        <DivTheme
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            ...provided.draggableProps.style,
          }}
        >
          <div className="flex items-center justify-between text-gray-700 text-sm capitalize mb-2">
            {label && (
              <div
                style={{ backgroundColor: label?.color }}
                className={`flex items-center gap-2 relative w-fit rounded px-2 py-1 text-white`}
              >
                <TurnedInIcon fontSize="small" />
                <span>{label?.name}</span>
                <div
                  style={{ backgroundColor: label?.color }}
                  className={`absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45`}
                ></div>
              </div>
            )}

            <DivTheme className="!p-0">
              <BorderColorIcon
                className="cursor-pointer"
                onClick={onRedirectEditPage}
                fontSize="small"
              />
            </DivTheme>
          </div>

          <h4 className="text-sm font-semibold line-clamp-1 mb-3">
            {issue.title}
          </h4>

          <div
            className="text-sm line-clamp-3"
            dangerouslySetInnerHTML={{ __html: issue.description }}
          />
        </DivTheme>
      )}
    </Draggable>
  );
};

export default IssueViewDraggable;
