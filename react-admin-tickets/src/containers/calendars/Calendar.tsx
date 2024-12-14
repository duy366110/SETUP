import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendars = () => {
    const [events, setEvents] = useState<any>([
      {
        id: "1",
        title: "Meeting",
        start: "2024-12-14T10:00:00",
        end: "2024-12-14T12:00:00",
      },
      {
        id: "2",
        title: "Workshop",
        start: "2024-12-15T09:00:00",
        end: "2024-12-15T11:00:00",
      },
    ]);

  const handleDateClick = (info: any) => {
    const title = prompt("Enter a title for your event:");
    if (title) {
      setEvents([
        ...events,
        { id: events.length + 1, title, start: info.dateStr },
      ]);
    }
  };

  const handleEventClick = (info: any) => {
    if (
      window.confirm(`Do you want to delete this event: ${info.event.title}?`)
    ) {
      setEvents(events.filter((event: any) => event.id !== parseInt(info.event.id)));
    }
  };

  return (
    <div>
      <h1>Meeting Scheduler</h1>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        editable={true}
        selectable={true}
        eventDurationEditable={true}
      />
    </div>
  );
};

export default Calendars;
