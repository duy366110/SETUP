import { useState, useEffect } from "react";
import { useGetList, useUpdate, useTranslate } from "react-admin";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import AddIcon from '@mui/icons-material/Add';

const IssuePageList = () => {
  const { data: board, isLoading: isLoadingStatus }: any = useGetList<any>("board");
  const t = useTranslate();
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

      let elm: any = data[`${source.droppableId}`].find((item: any) => item.id === draggableId);
      data[`${source.droppableId}`] = data[`${source.droppableId}`].filter((item: any) => item.id !== draggableId);
      data[`${destination.droppableId}`].push(elm);
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
                  <h3 className="flex items-center justity-between text-slate-400 text-sm capitalize font-medium mb-4 w-full">
                    <span className="mr-auto">{t(`issue.common.${columnId}`)}</span>
                    <AddIcon className="cursor-pointer" fontSize="small" />
                  </h3>

                  {onBoard &&
                    onBoard[`${columnId}`]?.map(
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
                                <p className="text-xs font-medium uppercase mb-2">{item.type}:</p>
                                <h4 className="text-sm font-semibold line-clamp-1 mb-3">{item.title}</h4>
                                <p className="text-sm line-clamp-4">{item.description}</p>
                                
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
