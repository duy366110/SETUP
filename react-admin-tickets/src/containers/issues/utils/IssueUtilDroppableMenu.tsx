import React, { useMemo } from "react";
import { useUpdate } from "react-admin";

interface IssueUtilDroppableMenuProps {
    statusIssue?: any
}

const IssueUtilDroppableMenu: React.FC<IssueUtilDroppableMenuProps> = ({
    statusIssue = null,
}) => {
    const [update] = useUpdate();
  const colors = useMemo(() => {
    return [
      "#4bce97",
      "#f5cd47",
      "#fea362",
      "#f87168",
      "#9f8fef",
      "#579dff",
      "#6cc3e0",
      "#94c748",
    ];
  }, []);

  const onChangeColor = async(color: string) => {
    console.log(color);
    console.log(statusIssue);

    let payload = {
        ...statusIssue,
        bg: color
    }

    try {
        await update(
          "issues-status",
          { id: statusIssue.id, data: payload },
          {
            onSuccess: () => {
                console.log("Update success");
            },
          },
        );
      } catch (e) {
        console.log("Error while saving data.");
      }
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-12">
        <h2 className="col-span-12">Change color list</h2>
        {colors && colors.length &&
          colors.map((color: string) => {
            return (
              <div
                key={color}
                className="h-10 col-span-3 w-16"
                style={{ backgroundColor: color }}
                onClick={(event) => onChangeColor(color)}
              ></div>
            );
          })}
      </div>
    </div>
  );
};

export default IssueUtilDroppableMenu;
