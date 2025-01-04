import { copy } from "https://deno.land/x/clipboard/mod.ts";

type Color = {
  id: string;
  name: string;
};

type ColorChartProps = {
  colors: Color[];
};

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
}

function ColorChart({ colors }: ColorChartProps) {
  const colorChartBox = (color: Color) => (
    <div class="flex flex-wrap border-2 border-black w-36 h-36">
      <div class="flex-1 p-4 text-black">{color.name}</div>
      <div class="flex-1 p-4">
        <button
          class="w-16 h-8 rounded-lg"
          style={{
            backgroundColor: color.id,
            borderWidth: 4,
            borderColor: color.id,
          }}
          onClick={() => copyToClipboard(color.id)}
        />
      </div>
    </div>
  );

  return (
    <section class="flex flex-wrap justify-center items-center gap-4">
      {colors.map((color) => colorChartBox(color))}
    </section>
  );
}

export default ColorChart;
