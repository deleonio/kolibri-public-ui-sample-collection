import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputRangeBasic } from "./basic";

export const InputRange: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputRangeBasic />} />
  </Routes>
);
