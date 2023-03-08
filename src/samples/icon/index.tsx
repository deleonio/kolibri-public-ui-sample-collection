import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { IconBasic } from "./basic";

export const Icon: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<IconBasic />} />
  </Routes>
);
