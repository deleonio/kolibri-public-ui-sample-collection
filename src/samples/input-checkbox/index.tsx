import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputCheckboxBasic } from "./basic";

export const InputCheckbox: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputCheckboxBasic />} />
  </Routes>
);
