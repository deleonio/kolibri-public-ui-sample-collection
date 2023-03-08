import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AbbrBasic } from "./basic";

export const Abbr: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<AbbrBasic />} />
  </Routes>
);
