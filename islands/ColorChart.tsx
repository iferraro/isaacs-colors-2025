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
    <div class="flex flex-col border-2 border-white">
      <div class="w-36 h-12 p-2 text-white">{color.name}</div>
      <div class="w-36 h-24 p-2">
        <button
          class="w-full h-full rounded-2xl"
          style={{
            backgroundColor: color.id,
          }}
          onClick={() => copyToClipboard(color.id)}
        />
      </div>
    </div>
  );

  return (
    <section class="flex flex-wrap justify-center items-center border-2 border-white">
      {colors.map((color) => colorChartBox(color))}
    </section>
  );
}

export default ColorChart;
