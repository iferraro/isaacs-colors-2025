import { useRef, useState } from "preact/hooks";
import Popover from "https://deno.land/x/tailored/components/Popover.tsx";
import { Color } from "../types.ts";

type ColorChartBoxProps = {
  color: Color;
};

export default function ColorChartBox({ color }: ColorChartBoxProps) {
  const ref = useRef(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await copyToClipboard(color.id);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div>
      <button
        ref={ref}
        type="button"
        className="w-24 h-24 rounded-2xl"
        style={{
          backgroundColor: color.id,
        }}
        aria-label={`${color.name}, ${color.id}`}
      />
      <Popover
        target={ref}
        trigger="click"
        clickOutside
        className="w-48 bg-black shadow-lg border-2 border-white rounded-lg p-4 
          transition-all duration-200 ease-in-out 
          data-[active=true]:scale-100 opacity-100 data-[active=false]:scale-90 opacity-0
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: color.id }}
          />
          <p className="text-white">{color.name}</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <code className="text-white">{color.id}</code>
          <button 
            className="text-white border-2 border-white rounded-lg p-1 hover:text-gray-300 transition-colors" 
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      </Popover>
    </div>
  );
}

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text).catch((err) => {
    console.error("Failed to copy text: ", err);
  });
}
