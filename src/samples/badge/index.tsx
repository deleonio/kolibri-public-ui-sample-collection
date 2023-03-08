import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { BadgeBasic } from "./basic";
import { BadgeButton } from "./button";

export const Badge: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<BadgeBasic />} />
    <Route path="/button" element={<BadgeButton />} />
  </Routes>
);
