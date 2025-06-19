(function () {
  const scriptTag = document.currentScript;
  const clientId = scriptTag.getAttribute("data-client-id") || "unknown";

  const iframe = document.createElement("iframe");
  iframe.src = `https://https://starkpilot.vercel.app/luli?clientId=${clientId}`;
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "360px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "12px";
  iframe.style.boxShadow = "0 0 12px rgba(0,0,0,0.15)";

  document.body.appendChild(iframe);
})();
