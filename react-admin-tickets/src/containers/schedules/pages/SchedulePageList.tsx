import { useState, useMemo } from "react";
import {
  SaveButton,
  List,
  SimpleForm,
  TextInput,
  DateTimeInput,
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
  },[])

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
      />

      <Dialogs title={t("schedule.dialog.title")}>
        <SimpleForm
          className="!p-0"
          key={key}
          onSubmit={onCreateScheduleHandler}
          toolbar={
            <div className="flex items-center justify-between">
              <Button
                onClick={() => dispatch(toggleDialog())}
                variant="contained"
                color="error"
              >
                {t("ra.action.cancel")}
              </Button>
              <SaveButton />
            </div>
          }
        >
          <TextInput source="title" label={t("schedule.form.title")} autoFocus={true} />
          <DateTimeInput source="start" label={t("schedule.form.start")} defaultValue={currentDate}/>
          <DateTimeInput source="end" label={t("schedule.form.end")} defaultValue={currentDate}/>
        </SimpleForm>
      </Dialogs>
      </div>
    </List>
  );
};

export default SchedulePageList;
