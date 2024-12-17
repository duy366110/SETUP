import React, { useMemo } from "react";
import { SimpleForm, TextInput, useUpdate, useTranslate } from "react-admin";

interface IssueUtilDroppableMenuProps {
  statusIssue?: any;
}

const IssueUtilDroppableMenu: React.FC<IssueUtilDroppableMenuProps> = ({
  statusIssue = null,
}) => {
  const [update] = useUpdate();
  const t = useTranslate();
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

  const upload = async (payload: any) => {
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
  };

  const onChangeColor = async (color: string) => {
    let payload = {
      ...statusIssue,
      bg: color,
    };
    upload(payload);
  };

  const onChangeTitle = (event: any) => {
    let payload = {
      ...statusIssue,
      name: event.target.value??"",
      title: event.target.value??"",
    };
    upload(payload);
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <h2 className="text-sm text-gray-500 mb-2">
            {t("issue.util.titleStatus")}
          </h2>
          <SimpleForm className="!p-0" toolbar={<></>}>
            <TextInput onBlur={onChangeTitle} source="title" />
          </SimpleForm>
        </div>

        <div className="col-span-12">
          <h2 className="text-sm text-gray-500 mb-2">
            {t("issue.util.colorStatus")}
          </h2>

          <div className="grid grid-cols-12">
            {colors &&
              colors.length &&
              colors.map((color: string) => {
                return (
                  <div
                    key={color}
                    className="h-10 col-span-3 w-16"
                    style={{ backgroundColor: color }}
                    onClick={(event: any) => onChangeColor(color)}
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueUtilDroppableMenu;
