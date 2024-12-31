import { copy } from "https://deno.land/x/clipboard/mod.ts";

type Color = {
  id: string;
  name: string;
};

type ColorChartProps = {
  colors: Color[];
};

function copyToClipboard(text: string) {
  navigator.clipboard
    .writeText(text)
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}

function ColorChart({ colors }: ColorChartProps) {
  const colorChartRow = (color: Color) => (
    <tr class="border-2 border-black">
      <td class="p-4 text-black">{color.name}</td>
      <td class="p-4">
        {/* TODO: Add shadow to the button */}
        {/* TODO: Add a checkmark to indicate that code was copied */}
        <button
          class="w-16 h-8 border-8 rounded-lg"
          style={{
            backgroundColor: color.id,
            borderWidth: 4,
            borderColor: color.id,
          }}
          onClick={() => copyToClipboard(color.id)}
        />
      </td>
    </tr>
  );

  return (
    <section>
      <table class="rounded-lg">
        <thead class="px-4 border-2 border-black rounded-lg">
          <tr class="text-black">
            <th class="p-4 rounded-lg">Name</th>
            <th class="p-4 rounded-lg">Block</th>
          </tr>
        </thead>
        <tbody class="border-2 border-black">
          {colors.map((color) => colorChartRow(color))}
        </tbody>
      </table>
    </section>
  );
}

export default ColorChart;
