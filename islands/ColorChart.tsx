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
    <div class="flex flex-col gap-2">
      <div class="w-40 p-1 text-center text-white bg-black border-2 border-white rounded-t-2xl">
        {color.name}
      </div>
      <div class="w-40 h-24">
        <button
          class="w-full h-full rounded-b-2xl"
          style={{
            backgroundColor: color.id,
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
