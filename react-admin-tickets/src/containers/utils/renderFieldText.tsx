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
