import fakeRestDataProvider from "ra-data-fakerest";
import data from "@/datas/data.json";

export const dataProvider = fakeRestDataProvider(
  data,
  process.env.NODE_ENV !== "test",
  300,
);
