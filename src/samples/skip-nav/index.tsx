import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { SkipNavBasic } from "./basic";

export const SkipNav: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<SkipNavBasic />} />
  </Routes>
);
