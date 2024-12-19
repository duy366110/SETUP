import React, { useMemo, useState } from "react";
import {
  Edit,
  Form,
  SimpleForm,
  TextInput,
  useUpdate,
  useTranslate,
} from "react-admin";

const IssueViewWorkListMenu: React.FC<any> = (params: any) => {
  const [update] = useUpdate();
  const t = useTranslate();
  const [title, setTitle] = useState<string>("");
  const [key, setKey] = useState<number>(0);
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
        { id: params.id, data: payload },
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
    if(color) {
      let payload = {
        ...params,
        bg: color,
      };
      upload(payload);
    }
  };

  const onLeaveTitle = (event: any) => {
    if (title) {
      let payload = {
        ...params,
        name: title ?? "",
        title: title ?? "",
      };

      setKey(key + 1);
      setTitle("");
      upload(payload);
    }
  };

  const onChangeTitle = (event: any) => {
    setTitle(event.target.value);
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <h2 className="text-sm text-gray-500 mb-2">
            {t("issue.util.titleStatus")}
          </h2>
          <SimpleForm key={key} className="!p-0" toolbar={<> </>}>
            <TextInput
              onMouseLeave={onLeaveTitle}
              onKeyUp={onChangeTitle}
              source="title"
              label={t("issue.form.title")}
            />
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

export default IssueViewWorkListMenu;
