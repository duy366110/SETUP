import React from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { PangeaListProps } from "./PangeaList.type";
import DivTheme from "@/components/Themes/DivTheme";
import Menus from "@/components/Menus/index";

const DraggItem = ({ workItem, index, dragContent }: any) => {
  return (
    <Draggable draggableId={`${workItem.id}`} index={index}>
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
          {dragContent(workItem)}
        </DivTheme>
      )}
    </Draggable>
  );
};

const DroppBox = ({ workBox, workBoxMenu, workItems, dragContent }: any) => {
  return (
    <Droppable droppableId={`${workBox.id}`}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          style={{
            backgroundColor: workBox && workBox?.bg ? workBox?.bg : "#f4f5f7",
            padding: "1rem",
            width: "300px",
            borderRadius: "8px",
          }}
        >
          <h3 className="flex items-center justity-between text-gray-700 text-sm capitalize font-medium mb-4 w-full">
            <span className="mr-auto">{workBox.title}</span>
            {workBoxMenu && (
              <Menus
                iconButton={
                  <MoreHorizIcon className="text-gray-700" fontSize="small" />
                }
              >
                {workBoxMenu(workBox)}
              </Menus>
            )}
          </h3>

          {workItems &&
            workItems[`${workBox.id}`]?.map((item: any) => {
              return (
                <DraggItem
                  key={item.id}
                  workItem={item}
                  index={item.id}
                  dragContent={dragContent}
                />
              );
            })}

          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

const PangeaList: React.FC<PangeaListProps> = ({
  dragContent,
  dragEnd,
  workList = [],
  workListMenu,
  workItems = [],
}) => {
  return (
    <DragDropContext onDragEnd={dragEnd}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {workList
          ?.sort((one: any, two: any) => one.order - two.order)
          ?.map((workBox: any) => {
            return (
              <DroppBox
                key={workBox.id}
                workBox={workBox}
                workBoxMenu={workListMenu}
                workItems={workItems}
                dragContent={dragContent}
              />
            );
          })}
      </div>
    </DragDropContext>
  );
};

export default PangeaList;
