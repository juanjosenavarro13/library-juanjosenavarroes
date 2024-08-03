interface Props {
  hola?: string;
}

export function Prueba({ hola = "hola" }: Readonly<Props>) {
  return <div>{hola}</div>;
}
