import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { SpinBasic } from "./basic";

export const Spin: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<SpinBasic />} />
  </Routes>
);
