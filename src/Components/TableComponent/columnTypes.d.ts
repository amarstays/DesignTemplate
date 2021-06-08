export type columnsType = {
  header: string;
  key: string;
};

export interface tableMetadata {
  title: string;
  columns: columnsType[];
}
