import TicketPageList from "./pages/TicketPageList";
import TicketPageCrate from "./pages/TicketPageCreate";
import TicketPageEdit from "./pages/TicketPageEdit";
import TicketPageDetail from "./pages/TicketPageDetail";

export const resource = {
  list: <TicketPageList />,
  create: <TicketPageCrate />,
  edit: <TicketPageEdit />,
  show: <TicketPageDetail />
};
