export const RenderFieldText = (data:any, field?: string) => {
  return (
    <div>
      {data && (
        <div
          style={{ backgroundColor: data.color }}
          className={`d-flex justify-center items-center rounded-md w-[100px] flex p-[5px] text-[#fff] !text-[13px]`}
        >
          {data[`${field}`]}
        </div>
      )}

      {!data && <div className={`d-flex justify-center items-center rounded-xl bg-slate-100 max-w-[150px] flex p-[5px] text-[#fff] !text-[13px]`}> // </div>}
    </div>
  );
};

export const RenderFieldTextAssignee = (record:any, data:any, field: string, click: any) => {
  return (
    <div onClick={(event:any) => click(event, record)}>
      {data && (
        <div
          className={`d-flex justify-center items-center rounded-md w-[100px] flex p-[5px] text-[#333] !text-[13px]`}
        >
          {data[`${field}`]}
        </div>
      )}

      {!data && <div className={`d-flex justify-center items-center rounded-xl bg-slate-100 max-w-[150px] flex p-[5px] text-[#fff] !text-[13px]`}> // </div>}
    </div>
  );
};
