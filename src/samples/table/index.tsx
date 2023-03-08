import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { TableBadgeSize } from "./badge-size";
import { TableRenderCell } from "./render-cell";
import { TableSortTabel } from "./sort-date";

export const Table: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="sort-date" />} />
    <Route path="/sort-date" element={<TableSortTabel />} />
    <Route path="/render-cell" element={<TableRenderCell />} />
    <Route path="/badge-size" element={<TableBadgeSize />} />
  </Routes>
);
