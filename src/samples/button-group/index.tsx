import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ButtonGroupBasic } from "./basic";

export const ButtonGroup: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<ButtonGroupBasic />} />
  </Routes>
);
