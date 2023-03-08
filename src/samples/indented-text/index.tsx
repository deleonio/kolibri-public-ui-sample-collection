import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { IndentedTextBasic } from "./basic";

export const IndentedText: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<IndentedTextBasic />} />
  </Routes>
);
