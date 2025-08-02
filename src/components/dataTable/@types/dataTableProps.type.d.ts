import { ReactNode } from "react";

interface IDataTableProps {
  headerTitle: string[];
  children?: ReactNode;
  metaType?: metaType;
  onChangePage?: (page: number) => void;
  onChangeSearch?: (search: string) => void;
  dataLength: number;
  rightSection?: ReactNode;
  title: string;
  isHeadingDisabled?: boolean;
  searchDisabled?: boolean;
  isShadow?:boolean
}
