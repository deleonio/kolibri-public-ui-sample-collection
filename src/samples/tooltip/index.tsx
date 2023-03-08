import { KolAlert, KolDetails } from "@public-ui/react";
import { FC } from "react";
import { Navigate, Route, Routes } from "react-router";
import { TooltipBasic } from "./basic";

export const Tooltip: FC = () => (
  <>
    <section className="mb-4">
      <p>
        Die Tooltip-Komponente implementiert das Gegenstück zum Aria-Label. Es
        ist also explizit nur dafür vorgesehen, dem/der Nutzer:in ohne
        Screenreader die Beschriftung eines Elementes anzuzeigen.
      </p>
      <KolDetails _summary="Hinweise zur Barrierefreiheit" class="hydrated">
        <p>
          Die Tooltip-Komponente wird bei Focus oder Hover angezeigt und dient
          ausschließlich dem/der sehenden Nutzer:in ohne Screenreader die
          Beschriftung (Aria-Label) lesen zu können. Der Text des Tooltips ist
          selbst nicht mit der Tastatur erreichbar und zudem mittels Aria-Hidden
          für die Screenreader versteckt.
        </p>
        <KolAlert _type="info" class="hydrated">
          Aus Sicht des Barrierefreiheitstests können Tooltips ignoriert werden,
          solange zudem von der Entwicklung sichergestellt wurde, dass der
          Tooltip-Text auch in gleicher Weise vom Screenreader vorgelesen wird.
        </KolAlert>
      </KolDetails>
    </section>
    <Routes>
      <Route path="/" element={<Navigate to="basic" />} />
      <Route path="/basic" element={<TooltipBasic />} />
    </Routes>
  </>
);
