import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { InputPasswordBasic } from "./basic";

export const InputPassword: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<InputPasswordBasic />} />
  </Routes>
);
