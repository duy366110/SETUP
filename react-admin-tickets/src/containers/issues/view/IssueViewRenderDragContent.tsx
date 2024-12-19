import { useState, useEffect } from "react";
import { useGetList, useRedirect, useTranslate } from "react-admin";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DivTheme from "@/components/Themes/DivTheme";

const IssueViewRenderDragContent = (params: any) => {
  const { data: labels } = useGetList<any>("labels");
  const { data: priorities } = useGetList<any>("priorities");
  const { data: assignes } = useGetList<any>("assignes");

  const [priority, setPriority] = useState<any>(null);
  const [label, setLabel] = useState<any>(null);
  const [assigne, setAssigne] = useState<any>(null);
  const redirect = useRedirect();
  const t = useTranslate();

  useEffect(() => {
    if (params) {
      let label = labels?.find((label: any) => label.id === params.label);
      setLabel(label);
    }
  }, [params, labels]);

  useEffect(() => {
    if (params) {
      let priority = priorities?.find(
        (priority: any) => priority.id === params.priority,
      );
      setPriority(priority);
    }
  }, [params, priorities]);

  useEffect(() => {
    if(params) {
      let assigne = assignes?.find((assigne: any) => assigne.id === params.assigne);
      setAssigne(assigne);
    }
  }, [params, assignes])

  return (
    <div>
      <div className="flex items-center justify-end text-gray-700 text-sm capitalize">
        <DivTheme className="!p-0">
          <BorderColorIcon
            className="cursor-pointer"
            onClick={() => redirect(`/issues/${params.id}`)}
            fontSize="small"
          />
        </DivTheme>
      </div>

      <h4 className="text-base font-semibold line-clamp-1">
        {params.title}
      </h4>

      <div className="flex gap-2 text-xs">
        <p>{t("ticket.common.assignee")}:</p>
        {assigne && (<p>{assigne.name}</p>)}
        {!assigne && (<p>//</p>)}
      </div>

      {/* LABEL - PRIORITY */}
      <div className="flex items-center justify-between my-3">
        {label && (
          <div
            style={{ backgroundColor: label?.color }}
            className={`flex items-center gap-2 relative w-fit rounded px-2 py-1 text-xs text-white`}
          >
            <TurnedInIcon className="!w-[13px]" fontSize="small" />
            <span>{label?.name}</span>
            <div
              style={{ backgroundColor: label?.color }}
              className={`absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45`}
            ></div>
          </div>
        )}
        {priority && (
          <p
            className="text-xs text-center py-1 px-2 rounded capitalize min-w-16"
            style={{
              backgroundColor: `${priority.color}`,
              color: "#ffffff",
            }}
          >
            {priority.name}
          </p>
        )}
      </div>


      <div
        className="text-xs text-left text-gray-700 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: params.description }}
      />
    </div>
  );
};

export default IssueViewRenderDragContent;
