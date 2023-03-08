import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputRadioBasic } from "./basic";

export const InputRadio: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputRadioBasic />} />
  </Routes>
);
