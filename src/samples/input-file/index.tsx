import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputFileBasic } from "./basic";

export const InputFile: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputFileBasic />} />
  </Routes>
);
