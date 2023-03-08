import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputTextBasic } from "./basic";
import { InputTextHiddenLabel } from "./hidden-label";

export const InputText: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputTextBasic />} />
    <Route path="/hidden-label" element={<InputTextHiddenLabel />} />
  </Routes>
);
