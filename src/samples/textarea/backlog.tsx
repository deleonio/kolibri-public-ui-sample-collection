export const Formularbeispiel = () => {
  const [touched, setTouched] = useState<boolean>(false);
  return (
    <div style={{ display: "grid", gap: "0.25em" }}>
      <KolTextarea {...DEFAULT_INPUT_PROPS} _touched={touched}>
        Beispieltext
      </KolTextarea>
      <KolTextarea _readOnly {...DEFAULT_INPUT_PROPS} _touched={touched}>
        Beispieltext (Read only)
      </KolTextarea>
      <KolTextarea _disabled {...DEFAULT_INPUT_PROPS} _touched={touched}>
        Beispieltext (disabled)
      </KolTextarea>
      <div style={{ display: "flex", gap: "0.25em" }}>
        <KolButton
          _variant="primary"
          _label="Absenden"
          _on={{
            onClick: () => {
              setTouched(true);
            }
          }}
        ></KolButton>
        <KolButton
          _variant="ghost"
          _label="Zurücksetzen"
          _on={{
            onClick: () => {
              setTouched(false);
            }
          }}
        ></KolButton>
      </div>
    </div>
  );
};
