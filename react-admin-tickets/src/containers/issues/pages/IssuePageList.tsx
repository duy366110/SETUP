import { useState, useEffect } from "react";
import {
  List,
  ListToolbar,
  FilterButton,
  TopToolbar,
  ExportButton,
  ReferenceInput,
  SearchInput,
  useReference,
  useGetList,
  useListContext,
  useTranslate,
  useRedirect,
} from "react-admin";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";

import { RootState, RootDispatch } from "@/store";
import { toggleDialog } from "@/store/slice/sliceDialog";
import Buttons from "@/components/Buttons/Buttons";
import Dialogs from "@/components/Dialogs/index";
import DrawerRight from "@/components/Drawers/DrawerRight";
import IssueViewCreate from "../view/IssueViewCreate";
import PangeaList from "@/components/Pangeas/PangeaList/index";
import IssueViewRenderDragContent from "../view/IssueViewRenderDragContent";
import IssueViewWorkListMenu from "../view/IssueViewWorkListMenu";
import IssueViewConfirmEdit from "../view/IssueViewConfirmEdit";

const DealActions = (props: any) => {
  return (
    <TopToolbar>
      <FilterButton />
      <Buttons
        className="!text-[13px] !py-[6px] !px-[8px]"
        click={props.onOpenDrawerIssue}
      >
        <AddIcon fontSize="small" />
        <span className="leading-[100%]">Thêm mới</span>
      </Buttons>
      <ExportButton />
    </TopToolbar>
  );
};

/**
 * Đây là Box hỗ trợ filter do useListContext chỉ hoạt động bênh trong một List
 * @param param0
 * @returns
 */
const IssuePageListFilterBox = ({ setIssueDataLocal }: any) => {
  const { data, isPending, filterValues: isseusDatas } = useListContext();

  useEffect(() => {
    setIssueDataLocal(data);
  }, [data]);

  return <div className="hidden">Filter box</div>;
};

const IssuePageList = () => {
  const { referenceRecord: issues } = useReference<any>({
    reference: "issues",
    id: 1,
  });

  const { data: isseusStaus } = useGetList<any>("issues-status", {
    filter: { issueId: issues?.id },
  });

  const { data: isseusDatas } = useGetList<any>("issues-datas", {
    filter: { issueId: issues?.id },
  });

  const t = useTranslate();
  // const [update] = useUpdate("issues");
  const redirect = useRedirect();

  const mediaQuery: any = useSelector<RootState>(
    (state: any) => state.mediaQuery,
  );

  const mode: any = useSelector<RootState>((state: any) => state.mode);
  const dispatch = useDispatch<RootDispatch>();

  const [issuesDatasLocal, setIssuesDatasLocal] = useState<Array<any>>([]);
  const [issueList, setIssueList] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openCreateDrawer, setOpenCreateDrawer] = useState<boolean>(false);
  const [issueUpdate, setIssueUpdate] = useState<any>(null);

  const dealFilters = [
    <SearchInput source="id" alwaysOn />,
    <ReferenceInput source="title" reference="issues-datas" />,
  ];

  const setUpWorkspaces = () => {
    let result: any = {};

    isseusStaus?.forEach((statusIssue: any) => {
      result[`${statusIssue.id}`] = [];
    });

    issuesDatasLocal?.forEach((item: any) => {
      const key = isseusStaus?.find((key: any) => key.id === item.statusId);
      if (key) {
        result[`${key.id}`].push(item);
      }
    });

    setIssueList(result);
  };

  /**
   * Thực hiện setup và load data lần đầu tiên
   */
  useEffect(() => {
    if (isseusDatas && isseusDatas?.length) {
      setIssuesDatasLocal(isseusDatas);
    }
  }, [isseusDatas]);

  /**
   * Thực hiện setup khi load data lần đầu và filter
   */
  useEffect(() => {
    if (issuesDatasLocal) {
      setUpWorkspaces();
    }
  }, [issuesDatasLocal]);

  /**
   * Sự kiện kéo issue items sang ô trạng thái mới
   * @param result
   * @returns
   */
  const onDragEnd = (result: any) => {
    const { source, draggableId, destination } = result;

    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      let workItem: any = {};

      for (let elm of issuesDatasLocal) {
        if (elm.id.toString() === draggableId) {
          Object.assign(workItem, elm);
          workItem.statusId = Number(destination.droppableId);
          break;
        }
      }

      setIssueUpdate(workItem);
      dispatch(toggleDialog());
    }
  };

  /**
   * Mở Drawer thêm mới issues
   */
  const onOpenDrawerIssue = () => {
    if (mediaQuery.md) {
      redirect("/issues/create");
      return;
    }
    setOpenDrawer(true);
    setOpenCreateDrawer(true);
  };

  /**
   * Đóng Drawer thêm mới issues
   */
  const onCloseDrawerIssue = () => {
    setOpenDrawer(false);
    if (openCreateDrawer) {
      setOpenCreateDrawer(false);
    }
  };

  return (
    <List resource="issues-datas" title={t("issue.title")} actions={<></>}>
      <div className="md:grid md:grid-cols-12 gap-4">
        <div
          className={`${openDrawer ? "md:col-span-9" : "md:col-span-12"} p-4 transition-all`}
        >
          <ListToolbar
            resource="issues-datas"
            className="mb-4"
            filters={dealFilters}
            actions={<DealActions onOpenDrawerIssue={onOpenDrawerIssue} />}
          />

          <div
            className={`${mode.type === "light" ? "bg-[#fbfbfb94]" : "bg-[#42424230]"} p-4 rounded-md`}
          >
            <IssuePageListFilterBox setIssueDataLocal={setIssuesDatasLocal} />

            <PangeaList
              dragEnd={onDragEnd}
              workList={isseusStaus}
              workListMenu={IssueViewWorkListMenu}
              workItems={issueList}
              dragContent={IssueViewRenderDragContent}
            />
          </div>
        </div>

        {issueUpdate && (
          <Dialogs title="Assign">
            <IssueViewConfirmEdit
              onCancel={setIssueUpdate}
              issue={issueUpdate}
            />
          </Dialogs>
        )}

        {openDrawer && issues && issues?.id && (
          <DrawerRight
            closeDrawer={onCloseDrawerIssue}
            open={openDrawer}
            title={t("issue.form.create")}
          >
            {openCreateDrawer && (
              <IssueViewCreate
                closeDrawer={onCloseDrawerIssue}
                issueId={issues?.id}
              />
            )}
          </DrawerRight>
        )}
      </div>
    </List>
  );
};

export default IssuePageList;
