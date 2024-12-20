import { useState, useMemo } from "react";
import {
  Create,
  SaveButton,
  List,
  SimpleForm,
  TextInput,
  DateTimeInput,
  Toolbar,
  useTranslate,
  useGetList,
  useCreate,
  useDelete,
} from "react-admin";
import { useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button } from "@mui/material";

import { RootDispatch } from "@/store";
import { toggleDialog } from "@/store/slice/sliceDialog";
import Dialogs from "@/components/Dialogs/Dialogs";

const SchedulePageList = () => {
  const t = useTranslate();
  const [create] = useCreate();
  const [deleteOne] = useDelete();
  const dispatch = useDispatch<RootDispatch>();
  const { data: schedules }: any = useGetList<any>("schedules", {});
  const [key, setKey] = useState<number>(0);
  const currentDate = useMemo(() => {
    return new Date().toISOString();
  }, []);

  const handleDateClick = (info: any) => {
    dispatch(toggleDialog());
  };

  const handleEventClick = async (info: any) => {
    try {
      deleteOne(
        "schedules",
        { id: info.event.id },
        {
          onSuccess: () => {
            console.log("Delete success");
          },
        },
      );
    } catch (error: any) {
      console.log("Đã xảy ra lỗi");
    }
  };

  const onCreateScheduleHandler = async (data: any) => {
    try {
      await create(
        "schedules",
        { data },
        {
          onSuccess: () => {
            setKey(key + 1);
            dispatch(toggleDialog());
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  return (
    <List
      resource="schedules"
      title={t("schedule.title")}
      pagination={false}
      actions={<></>}
    >
      <div className="p-4">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={schedules}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
          editable={true}
          selectable={true}
          eventDurationEditable={true}
          headerToolbar={{
            left: "prev,next today",
            // center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          eventDidMount={(info) => {
            info.el.style.backgroundColor = "#F1F9F6";
            info.el.style.color = "#171717";
            info.el.style.border = "1px solid #d2d9d6";
          }}
          eventContent={(eventInfo) => {
            const startDate: any = eventInfo.event.start;
            const endDate: any = eventInfo.event.end;

            const formattedStartDate = `${startDate.getDate()}/${startDate.getMonth() + 1}/${startDate.getFullYear()}`;
            const formattedEndDate = `${endDate.getDate()}/${endDate.getMonth() + 1}/${endDate.getFullYear()}`;

            return (
              <div
                style={{
                  color: "#171717",
                  padding: "5px",
                }}
              >
                <div>
                  {formattedStartDate} - {formattedEndDate}
                </div>
                <div>{eventInfo.timeText}</div>
                <div>{eventInfo.event.title}</div>
              </div>
            );
          }}
        />

        <Dialogs title={t("schedule.dialog.title")}>
          <Create className="lg:w-[350px]">
            <SimpleForm
              className=""
              key={key}
              onSubmit={onCreateScheduleHandler}
              toolbar={
                <Toolbar className="!px-[16px]">
                  <div className="flex justify-between w-full">
                    <Button
                      onClick={() => dispatch(toggleDialog())}
                      variant="contained"
                      color="error"
                    >
                      {t("ra.action.cancel")}
                    </Button>
                    <div className="flex gap-4 items-center">
                      <SaveButton />
                    </div>
                  </div>
                </Toolbar>
              }
            >
              <TextInput
                source="title"
                label={t("schedule.form.title")}
                autoFocus={true}
              />
              <DateTimeInput
                source="start"
                label={t("schedule.form.start")}
                defaultValue={currentDate}
              />
              <DateTimeInput
                source="end"
                label={t("schedule.form.end")}
                defaultValue={currentDate}
              />
            </SimpleForm>
          </Create>
        </Dialogs>
      </div>
    </List>
  );
};

export default SchedulePageList;
