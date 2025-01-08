
import ColorChartBox from "./ColorChartBox.tsx";
import { Color } from "../types.ts";

type ColorChartProps = {
  colors: Color[];
};

export default function ColorChart({ colors }: ColorChartProps) {
  return (
    <section className="flex flex-wrap justify-center items-center gap-4">
      {colors.map((color) => <ColorChartBox color={color} />)}
    </section>
  );
}
