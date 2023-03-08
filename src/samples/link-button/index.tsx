import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { LinkButtonBasic } from "./basic";

export const LinkButton: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<LinkButtonBasic />} />
  </Routes>
);
