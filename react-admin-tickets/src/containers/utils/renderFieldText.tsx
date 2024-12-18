import PTheme from "@/components/Themes/PTheme";
export const RenderFieldText = (data:any, field?: string) => {
  return (
    <div>
      {data && (
        <div
          style={{ backgroundColor: data.color }}
          className={`d-flex justify-center items-center rounded-md w-[100px] flex p-[5px] text-[#fff] !text-sm`}
        >
          {data[`${field}`]}
        </div>
      )}

      {!data && <div className={`d-flex justify-center items-center rounded-xl bg-slate-100 max-w-[150px] flex p-[5px] text-[#fff] !text-sm`}> // </div>}
    </div>
  );
};

export const RenderFieldTextAssignee = (record:any, data:any, field: string, click: any) => {
  return (
    <div className="flex justify-start" onClick={(event:any) => click(event, record)}>
      {data && (
        <PTheme
          className={`flex justify-start items-center rounded-md w-full flex p-[5px] text-[#333] !text-sm`}
        >
          {data[`${field}`]}
        </PTheme>
      )}

      {!data && <PTheme className={`d-flex justify-center items-center rounded-xl bg-slate-100 max-w-[150px] flex p-[5px] text-[#fff] !text-sm`}> // </PTheme>}
    </div>
  );
};
