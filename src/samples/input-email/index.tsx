import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputEmailBasic } from "./basic";

export const InputEmail: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputEmailBasic />} />
  </Routes>
);
