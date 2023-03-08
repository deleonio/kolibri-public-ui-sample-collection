import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { AlertBasic } from "./basic";
import { AlertCardMsg } from "./card-msg";
import { AlertHtml } from "./html";

export const Alert: FC = () => (
  <Routes>
    <Route path="/" element={<Navigate to="basic" />} />
    <Route path="/basic" element={<AlertBasic variant={"msg"} />} />
    <Route path="/card-msg" element={<AlertCardMsg />} />
    <Route path="/html" element={<AlertHtml />} />
  </Routes>
);
