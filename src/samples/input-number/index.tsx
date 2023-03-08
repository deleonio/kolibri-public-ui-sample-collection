import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputNumberBasic } from "./basic";

export const InputNumber: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputNumberBasic />} />
  </Routes>
);
