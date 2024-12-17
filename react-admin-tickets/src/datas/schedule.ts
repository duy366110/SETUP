export interface ScheduleType {
  id?: number;
  title?: string;
  start?: Date;
  end?: Date;
}

export const Schedule: ScheduleType[] = [
    {
        id: 1,
        title: "Meeting",
        start: new Date("2024-12-14T10:00:00"),
        end: new Date("2024-12-14T12:00:00"),
      },
      {
        id: 2,
        title: "Workshop",
        start: new Date("2024-12-15T09:00:00"),
        end: new Date("2024-12-15T11:00:00"),
      },
];
