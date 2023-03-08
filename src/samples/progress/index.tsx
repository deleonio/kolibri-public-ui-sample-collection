import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ProgressBasic } from "./basic";

export const Progress: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<ProgressBasic />} />
  </Routes>
);
