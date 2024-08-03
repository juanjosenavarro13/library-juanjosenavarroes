interface Props {
  hola: string;
}

export function Prueba({ hola = "hola" }: Props) {
  return <div>{hola}</div>;
}
