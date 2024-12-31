import { useSignal } from "@preact/signals";
import isaacsColors from "../static/isaacs-custom-colors.json" with { type: "json" };
import { Button } from "../components/Button.tsx";
import ColorChart from "../islands/ColorChart.tsx";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-around content-around gap-4 p-4 max-w-screen-md mx-auto">
      <h1 class="text-4xl text-black font-bold">Isaac&apos;s Colors</h1>
      <ColorChart colors={isaacsColors} />
    </div>
  );
}

