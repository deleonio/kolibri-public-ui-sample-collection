import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BreadcrumbBasic } from "./basic";

export const Breadcrumb: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<BreadcrumbBasic />} />
  </Routes>
);
