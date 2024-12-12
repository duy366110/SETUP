import {
  CreateButton,
  ExportButton,
  SelectColumnsButton,
  FilterButton,
  TopToolbar,
} from "react-admin";

export const UtilsActions = () => {
  return (
    <TopToolbar>
      <FilterButton />
      <CreateButton />
      <SelectColumnsButton />
      <ExportButton />
    </TopToolbar>
  );
};
