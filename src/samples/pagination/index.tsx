import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { PaginationBasic } from "./basic";

export const Pagination: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<PaginationBasic />} />
  </Routes>
);
