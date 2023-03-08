import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputColorBasic } from "./basic";

export const InputColor: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputColorBasic />} />
  </Routes>
);
