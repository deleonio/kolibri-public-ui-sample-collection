import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { SelectBasic } from "./basic";

export const Select: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<SelectBasic />} />
  </Routes>
);
