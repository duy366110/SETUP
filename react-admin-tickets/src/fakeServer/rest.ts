import FakeRest from "fakerest";
import fetchMock from "fetch-mock";
import generateData from "data-generator-retail";

import { Tickets } from "@/datas/tickets";
import { Comments } from "@/datas/comments";
import { Statuses } from "@/datas/statuses";
import { Priorities } from "@/datas/priorities";
import { Assignes } from "@/datas/assignes";
import { Board } from "@/datas/board";
import { Issues } from "@/datas/issues";
import { IssueStatus } from "@/datas/isseStatus";


export default () => {
    const data = generateData({ serializeDate: true });
    const restServer = new FakeRest.FetchServer("http://localhost:4000");
    if (window) {
      window.restServer = restServer; // give way to update data in the console
    }
    restServer.init({
      ...data,
      "comments": Comments,
      "statuses": Statuses,
      "priorities": Priorities,
      "tickets": Tickets,
      "assignes": Assignes,
      "board": Board,
      "issues": Issues,
      "issues-status": IssueStatus,
    });
    restServer.toggleLogging(); // logging is off by default, enable it
    fetchMock?.mock("begin:http://localhost:4000", restServer.getHandler());
    return () => fetchMock.restore();
  };