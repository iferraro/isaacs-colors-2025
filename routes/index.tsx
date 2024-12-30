import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import isaacsColors from "../static/isaacs-custom-colors.json" with { type: "json" };

export default function Home() {
  const count = useSignal(3);
  return (
    <div class="px-4 py-8 mx-auto bg-black">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Isaacs Colors</h1>
        <section>
          <table>
            <thead>
              <tr class="text-white">
                <th>Name</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {isaacsColors.map((color) => (
                <tr>
                  <td class="text-white">{color.name}</td>
                  <td style={{ backgroundColor: color.id }}></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>        
  );
}
