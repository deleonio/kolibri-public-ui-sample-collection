import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { VersionBasic } from "./basic";

export const Version: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<VersionBasic />} />
  </Routes>
);
