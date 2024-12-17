import { useState } from "react";
import {
  useTranslate,
  SimpleForm,
  SaveButton,
  useCreate,
  useGetList,
  useRefresh,
} from "react-admin";
import { ListItem, ListItemAvatar, ListItemText, Avatar } from "@mui/material";
import { RichTextInput } from "ra-input-rich-text";

const FormComment = (props: any) => {
  const t = useTranslate();

  return (
    <RichTextInput
      source="comments"
      className="ra-rich-text-editor !p-0 !w-full"
      label={
        <span className="text-base font-semibold mb-2">
          {t("ticket.common.comment")}
        </span>
      }
      sx={{
        "& .ql-container": {
          minHeight: "350px",
        },
      }}
      fullWidth
    />
  );
};

export const Comments = (props: any) => {
  const [create] = useCreate("comments");
  const t = useTranslate();
  const refresh = useRefresh();
  const [key, setKey] = useState(0);

  const { data: comments } = useGetList<any>("comments", {
    filter: { idTciket: props.record.id },
    sort: { field: "id", order: "DESC" },
    pagination: { page: 1, perPage: 50 },
  });

  const handleSubmit = async (data: any) => {
    let payload = {
      idTciket: props.record.id,
      content: data.comments,
    };

    try {
      await create(
        "comments",
        { data: payload },
        {
          onSuccess: () => {
            setKey(key+1);
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  return (
    <div>
      <div>
        <SimpleForm
            key={key}
          className="!p-0"
          onSubmit={handleSubmit}
          toolbar={
            <div className="flex justify-end gap-4 w-full">
              <SaveButton label={t("common.button.comment")} />
            </div>
          }
        >
          <FormComment />
        </SimpleForm>
        <h2 className="text-base font-semibold mb-2">
          {t("ticket.common.comment")}
        </h2>
        {comments && comments.length > 0 ? (
          <ul className="mt-2 list-disc pl-5">
            {comments.map((comment: any) => (
              <li
                key={comment.id}
                className="border rounded p-2 text-gray-900 mb-4"
              >
                <div>
                  <ListItem
                    className="!py-0 !items-start"
                    sx={{ display: "flex" }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        alt={""}
                        src={
                          "https://img.freepik.com/premium-vector/profile-icon-female-avatar_48369-2119.jpg?w=826"
                        }
                      />
                    </ListItemAvatar>
                    <div className="">
                      <ListItemText primary={"user"} />
                      <div
                        className="text-base"
                        dangerouslySetInnerHTML={{
                          __html: comment.content,
                        }}
                      />
                    </div>
                  </ListItem>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">
            {t("common.message.commentPlaceholder")}
          </p>
        )}
      </div>
    </div>
  );
};
