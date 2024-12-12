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
      <SelectColumnsButton />
      <CreateButton />
      <ExportButton />
    </TopToolbar>
  );
};
