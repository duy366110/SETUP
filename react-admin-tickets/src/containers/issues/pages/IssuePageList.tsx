import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const initialData = {
  columns: {
    opportunity: {
      id: "opportunity",
      title: "Opportunity",
      items: [
        {
          id: "1",
          title: "Ut id itaque",
          value: "$25.8K",
          type: "Print project",
        },
        {
          id: "2",
          title: "Error impedit ut",
          value: "$15.9K",
          type: "Print project",
        },
        // ...
      ],
    },
    proposalSent: {
      id: "proposalSent",
      title: "Proposal Sent",
      items: [
        {
          id: "3",
          title: "Voluptas cum reciendis",
          value: "$73.8K",
          type: "Copywriting",
        },
        // ...
      ],
    },
    // Các cột khác...
  },
  columnOrder: ["opportunity", "proposalSent"],
};

const IssuePageList = () => {
  const [data, setData] = useState<any>(initialData);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    // Không làm gì nếu kéo-thả không hợp lệ
    if (!destination) return;

    // Cập nhật trạng thái khi kéo-thả thành công
    const sourceColumn = data.columns[source.droppableId];
    const destinationColumn = data.columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      const newColumn = {
        ...sourceColumn,
        items: sourceItems,
      };
      setData({
        ...data,
        columns: {
          ...data.columns,
          [sourceColumn.id]: newColumn,
        },
      });
    } else {
      const destinationItems = [...destinationColumn.items];
      destinationItems.splice(destination.index, 0, removed);
      setData({
        ...data,
        columns: {
          ...data.columns,
          [sourceColumn.id]: { ...sourceColumn, items: sourceItems },
          [destinationColumn.id]: {
            ...destinationColumn,
            items: destinationItems,
          },
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {data.columnOrder.map((columnId: any) => {
          const column: any = data.columns[columnId];
          return (
            <Droppable key={column.id} droppableId={column?.id}>
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
                  <h3>{column.title}</h3>
                  {column.items.map((item: any, index: any) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
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
                          <h4>{item.title}</h4>
                          <p>{item.value}</p>
                          <p>{item.type}</p>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default IssuePageList;
