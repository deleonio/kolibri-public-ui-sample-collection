import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { DetailsBasic } from "./basic";

export const Details: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<DetailsBasic />} />
  </Routes>
);
