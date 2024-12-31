function ColorChartButton({color}: {color: IsaacsColor}) {  
  return (
    <button 
      class="w-16 h-8 border-8 rounded-lg" 
      style={{ backgroundColor: color.id, borderWidth: 4, borderColor: color.id }} 
      onClick={async () => { console.log("clicked"); await copy(color.id)}}
    />
  );
}