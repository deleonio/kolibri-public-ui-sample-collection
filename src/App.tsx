import { Navigate, Route, Routes } from "react-router-dom";
import { Route as MyRoute, Routes as MyRoutes } from "./shares/types";

import { Option } from "@public-ui/components";
import { KolAlert, KolButton, KolLink, KolSelect } from "@public-ui/react";
import { FC, useState } from "react";
import { ROUTES } from "./shares/routes";
import { Theme, THEME_OPTIONS } from "./shares/themes";
import "./style.css";

const THEME_REGEX = /theme=([^&]+)/;

const getThemeFromLocation = () => {
  if (THEME_REGEX.test(window.location.hash)) {
    console.log(window.location.hash.match(THEME_REGEX));
    const match = window.location.hash.match(THEME_REGEX);
    if (Array.isArray(match) && match.length > 0) {
      return match[0].replace(THEME_REGEX, "$1");
    }
  }
  return "default";
};

const getRouteList = (routes: MyRoutes, offset = "/"): string[] => {
  let list: string[] = [];
  for (let key in routes) {
    if (routes[key]) {
      const ThisRoute: MyRoute = routes[key];
      const path = `${offset}${key}`;
      if (typeof ThisRoute === "function") {
        list.push(path);
      } else if (typeof ThisRoute === "object" && ThisRoute !== null) {
        list = list.concat(getRouteList(ThisRoute, `${path}/`));
      }
    }
  }
  return list;
};

const getRouteTree = (routes: MyRoutes): ReturnType<typeof Route>[] => {
  let tree: ReturnType<typeof Route>[] = [];
  for (let key in routes) {
    if (routes[key]) {
      const ThisRoute: MyRoute = routes[key];
      const path = `/${key}`;
      if (typeof ThisRoute === "function") {
        tree.push(<Route key={path} path={path} element={<ThisRoute />} />);
        tree.push(
          <Route
            key={`${path}/all`}
            path={`${path}/all`}
            element={
              <div className="d-grid gap-4">
                {THEME_OPTIONS.map((theme: Option<Theme>) => (
                  <div
                    className="d-grid gap-2"
                    key={theme.value as string}
                    data-theme={theme.value}
                  >
                    <strong>{theme.label}</strong>
                    <ThisRoute />
                    <hr aria-hidden="true" />
                  </div>
                ))}
              </div>
            }
          />
        );
      } else if (typeof ThisRoute === "object" && ThisRoute !== null) {
        const keys = Object.keys(ThisRoute);
        if (keys.length > 0) {
          tree.push(
            <Route
              key={path}
              path={`${path}/*`}
              element={
                <Routes>
                  <Route path="/" element={<Navigate to={keys[0]} />} />
                  {getRouteTree(ThisRoute)}
                </Routes>
              }
            />
          );
        }
      }
    }
  }
  return tree;
};

const ROUTE_LIST = getRouteList(ROUTES);
const ROUTE_TREE = getRouteTree(ROUTES);

console.clear();
console.log("ROUTE_LIST", ROUTE_LIST);
console.log("ROUTE_TREE", ROUTE_TREE);

const clearHash = (str) => str.replace(/\?.*/g, "").replace(/^#/g, "");

const getIndexOfRoute = (str) => {
  return ROUTE_LIST.indexOf(clearHash(str));
};

export const App: FC = () => {
  const [theme] = useState(getThemeFromLocation());
  const [sample, setSample] = useState(clearHash(window.location.hash));

  let active = false;

  const catchRef = () => {
    setTimeout(() => {
      active = true;
    }, 2500);
  };

  const on = {
    onChange: (_event, value) => {
      if (active) {
        window.location.href =
          window.location.href
            .replace(THEME_REGEX, "")
            .replace(/(\?|&{1,})$/g, "")
            .replace(/&{2,}/g, "&") + `?theme=${value}`;
        window.location.reload();
      }
    }
  };

  const next = {
    onClick: () => {
      let idx = getIndexOfRoute(window.location.hash);
      if (idx >= ROUTE_LIST.length - 1) {
        idx = 0;
      } else {
        idx += 1;
      }
      setSample(clearHash(ROUTE_LIST[idx]));
      window.location.href = `https://${window.location.host}#${ROUTE_LIST[idx]}?theme=${theme}`;
    }
  };

  const prev = {
    onClick: () => {
      let idx = getIndexOfRoute(window.location.hash);
      if (idx <= 0) {
        idx = ROUTE_LIST.length - 1;
      } else {
        idx -= 1;
      }
      setSample(clearHash(ROUTE_LIST[idx]));
      window.location.href = `https://${window.location.host}#${ROUTE_LIST[idx]}?theme=${theme}`;
    }
  };

  return (
    <div className="d-grid gap-4" data-theme={theme} ref={catchRef}>
      <div className="d-grid gap-2" data-theme={theme} ref={catchRef}>
        <div className="toolbar" style={{}}>
          <dl
            style={{
              display: "flex",
              gap: ".5rem"
            }}
          >
            <dt>Beispiel:</dt>
            <dd>
              <KolLink
                _href={`${window.location.href}?theme=${theme}`}
                _label={sample}
                _target="codesandbox"
              />
            </dd>
          </dl>
          <KolButton
            _ariaLabel="Weiter zum nächsten Komponenten-Beispiel"
            _icon={{ right: "fa-solid fa-arrow-right" }}
            _iconOnly
            _label="Weiter"
            _on={next}
            _tooltipAlign="left"
          />
          <KolButton
            _ariaLabel="Weiter zum nächsten Komponenten-Beispiel"
            _icon="fa-solid fa-arrow-left"
            _iconOnly
            _label="Zurück"
            _on={prev}
            _tooltipAlign="right"
            _variant="ghost"
          />
          <KolSelect
            className="col-span-2 sm:col-auto"
            _hideLabel
            _id="theme-toggle"
            _list={THEME_OPTIONS}
            _on={on}
            _value={[theme]}
          >
            Theme wechseln
          </KolSelect>
        </div>
        <hr aria-hidden="true" />
      </div>
      <div className="py-4">
        <Routes>
          {getRouteTree(ROUTES)}
          <Route
            path="*"
            element={
              <KolAlert _type="info">
                This code example has not been migrated yet - it's coming soon!
              </KolAlert>
            }
          />
        </Routes>
      </div>
    </div>
  );
};
