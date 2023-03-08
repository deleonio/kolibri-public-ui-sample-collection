import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { ButtonBasic } from "./basic";
import { ButtonIconOnly } from "./icon-only";
import { ButtonIcons } from "./icons";
import { ButtonWidth } from "./width";

export const Button: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<ButtonBasic />} />
    <Route path="/icon-only" element={<ButtonIconOnly />} />
    <Route path="/icons" element={<ButtonIcons />} />
    <Route path="/width" element={<ButtonWidth />} />
  </Routes>
);
