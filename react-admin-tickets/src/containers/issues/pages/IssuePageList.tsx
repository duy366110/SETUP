import { useState, useEffect } from "react";
import {
  List,
  ListToolbar,
  FilterButton,
  TopToolbar,
  ExportButton,
  ReferenceInput,
  SearchInput,
  useUpdate,
  useReference,
  useGetList,
  useListContext,
  useTranslate,
  useRedirect,
} from "react-admin";
import { useSelector } from "react-redux";
import { DragDropContext } from "@hello-pangea/dnd";
import AddIcon from "@mui/icons-material/Add";

import { RootState } from "@/store";
import Buttons from "@/components/Buttons/Buttons";
import DrawerRight from "@/components/Drawers/DrawerRight";
import IssueViewDroppable from "../view/IssueViewDroppable";
import IssueViewCreate from "../view/IssueViewCreate";

const DealActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
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
    // sort: { field: 'date', order: 'DESC' },
    // pagination: { page: 1, perPage: 50 },
  });

  const { data: isseusDatas } = useGetList<any>("issues-datas", {
    filter: { issueId: issues?.id },
    // sort: { field: 'date', order: 'DESC' },
    // pagination: { page: 1, perPage: 50 },
  });
  const t = useTranslate();
  const [update] = useUpdate("issues");
  const redirect = useRedirect();

  const mediaQuery: any = useSelector<RootState>(
    (state: any) => state.mediaQuery,
  );

  const mode: any = useSelector<RootState>(
    (state: any) => state.mode,
  );

  const [issuesDatasLocal, setIssuesDatasLocal] = useState<Array<any>>([]);
  const [issueList, setIssueList] = useState<any>(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [openCreateDrawer, setOpenCreateDrawer] = useState<boolean>(false);

  const dealFilters = [
    <SearchInput source="q" alwaysOn />,
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
   * Upload trạng thái mới của một issues items.
   * @param data
   */
  const upload = async (data: any) => {
    try {
      await update(
        "issues",
        { id: issues.id, data },
        {
          onSuccess: () => {
            setUpWorkspaces();
          },
        },
      );
    } catch (e) {
      console.log("Error while saving data.");
    }
  };

  /**
   * Sự kiện kéo issue items sang ô trạng thái mới
   * @param result
   * @returns
   */
  const onDragEnd = (result: any) => {
    const { source, draggableId, destination } = result;

    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      let payload: any = {};
      Object.assign(payload, issues);

      payload.items = issuesDatasLocal?.map((item: any) => {
        if (item.id === Number(draggableId)) {
          item.statusId = Number(destination.droppableId);
        }
        return item;
      });

      upload(payload);
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
            actions={<DealActions />}
          />

          <div className={`${mode.type === "light" ? "bg-[#fbfbfb94]" : "bg-[#42424230]"} p-4 rounded-md`}>
            <div className="mb-4">
              <Buttons click={onOpenDrawerIssue}>
                <AddIcon className="text-gray-700" fontSize="small" />
                <span className="leading-[100%]">Thêm mới sự cố</span>
              </Buttons>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <IssuePageListFilterBox
                  setIssueDataLocal={setIssuesDatasLocal}
                />
                {isseusStaus
                  ?.sort((one, two) => one.order - two.order)
                  ?.map((statusIssue: any) => {
                    return (
                      <IssueViewDroppable
                        key={statusIssue?.id}
                        statusIssue={statusIssue}
                        issueList={issueList}
                      />
                    );
                  })}
              </div>
            </DragDropContext>
          </div>
        </div>

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
