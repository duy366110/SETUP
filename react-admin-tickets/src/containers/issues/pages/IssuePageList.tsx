import { useState, useEffect } from "react";
import { useGetList, useUpdate } from "react-admin";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const IssuePageList = () => {
  const { data: board, isLoading: isLoadingStatus }: any =
    useGetList<any>("board");
  const [onBoard, setOnBoard] = useState<any>(null);
  const [update] = useUpdate("board");

  useEffect(() => {
    if (board?.length) {
      setOnBoard(board[0]);
    }
  }, [board]);

  const upload = async (data: any) => {
    try {
      await update(
        "board",
        { id: onBoard.id, data },
        {
          onSuccess: () => {
            console.log("Update success");
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
      let data: any = {};

      Object.assign(data, onBoard);

      let elm: any = data[`${source.droppableId.toLowerCase()}`].find((item: any) => item.id === draggableId);
      data[`${destination.droppableId.toLowerCase()}`].push(elm);
      data[`${source.droppableId.toLowerCase()}`] = data[`${source.droppableId.toLowerCase()}`].filter((item: any) => item.id !== draggableId);
      upload(data);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "flex", gap: "1rem" }}>
        {onBoard?.keys?.map((columnId: any) => {
          return (
            <Droppable key={columnId} droppableId={columnId}>
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
                  <h3>{columnId}</h3>

                  {onBoard &&
                    onBoard[`${columnId?.toLowerCase()}`]?.map(
                      (item: any, index: number) => {
                        return (
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
                        );
                      },
                    )}

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
