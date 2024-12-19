import { useState, useEffect } from "react";
import { useGetList, useRedirect } from "react-admin";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DivTheme from "@/components/Themes/DivTheme";

const IssueViewRenderDragContent = (parmas: any) => {
  const { data: labels } = useGetList<any>("labels");
  const [label, setLabel] = useState<any>(null);
  const redirect = useRedirect();

  useEffect(() => {
    if (parmas) {
      let label = labels?.find((label: any) => label.id === parmas.label);
      setLabel(label);
    }
  }, [parmas, labels]);

  return (
    <div>
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
            onClick={() => redirect(`/issues/${parmas.id}`)}
            fontSize="small"
          />
        </DivTheme>
      </div>

      <h4 className="text-sm font-semibold line-clamp-1 mb-3">
        {parmas.title}
      </h4>
      <div
        className="text-sm line-clamp-3"
        dangerouslySetInnerHTML={{ __html: parmas.description }}
      />
    </div>
  );
};

export default IssueViewRenderDragContent;
