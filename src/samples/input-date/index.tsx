import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputDateBasic } from "./basic";

export const InputDate: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputDateBasic />} />
  </Routes>
);
