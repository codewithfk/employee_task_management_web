import { Flex, Input, Pagination, Paper, Table, Title } from "@mantine/core";
import React from "react";
import { IDataTableProps } from "./@types/dataTableProps.type";
import { IconSearch } from "@tabler/icons-react";
import EmptyData from "../placeholders/EmptyData";
const { Tbody, Td, Th, Tr, Thead, Tfoot } = Table;
function DataTable({
  headerTitle,
  children,
  metaType,
  onChangePage,
  onChangeSearch,
  dataLength,
  rightSection,
  title,
  isHeadingDisabled,
  searchDisabled,
  
}: IDataTableProps) {
  const tableHeader = (
    <Tr>
      {headerTitle?.map((item, index) => (
        <Th key={index + ""}>{item}</Th>
      ))}
    </Tr>
  );

  return (
    <Paper shadow="md" p="md">
      {isHeadingDisabled ? null : (
        <Flex mb={"lg"} align={'center'}>
          <Title flex={1}>{title}</Title>
          {rightSection}{" "}
          {searchDisabled ? null : (
            <Input
              size="xs"
              type="search"
              placeholder="Search"
              onChange={(e) => onChangeSearch && onChangeSearch(e.target.value)}
              rightSection={<IconSearch size={14} />}
            />
          )}
        </Flex>
      )}
      {!dataLength ? (
        <EmptyData />
      ) : (
        <Table
          captionSide="bottom"
          striped
          highlightOnHover
          withRowBorders={false}
        >
          <Thead>{tableHeader}</Thead>
          <Tbody>{children}</Tbody>

          {(metaType?.last_page ?? 0) > 1 ? (
            <Table.Caption>
              <Pagination
                size={"sm"}
                withEdges
                total={metaType?.last_page!}
                value={metaType?.current_page!}
                onChange={onChangePage}
                styles={{
                  root: {
                    display: "flex",
                    justifyContent: "flex-end",
                  },
                }}
              />
            </Table.Caption>
          ) : null}
        </Table>
      )}
    </Paper>
  );
}

export default DataTable;
