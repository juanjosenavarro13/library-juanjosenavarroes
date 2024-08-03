import { useState } from "react";

export function Prueba() {
  const [prueba, setPrueba] = useState(0);

  return (
    <div>
      <button onClick={() => setPrueba(prueba + 1)}>Prueba</button> {prueba}
    </div>
  );
}
