import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import isaacsColors from "../static/isaacs-custom-colors.json" with { type: "json" };
import { copy } from "https://deno.land/x/clipboard/mod.ts";

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto bg-black">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl text-white font-bold">Isaac&apos;s Colors</h1>
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
                  <td>
                    <button onClick={async () => { console.log("clicked"); await copy(color.id)}}>
                      {/* May be good to have something like a checkmark to indicate that code was copied */}
                      <div className="w-8 h-4" style={{ backgroundColor: color.id }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>        
  );
}

