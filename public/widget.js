// Updated Embed Script - Smart Resizing Chat Widget
(() => {
  const scriptTag = document.currentScript;
  const clientId = scriptTag?.getAttribute("data-client-id") || "unknown";

  // Create iframe container
  const iframe = document.createElement("iframe");
  iframe.src = `http://localhost:5000/widget?clientId=${clientId}`;
  iframe.style.position = "relative";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.border = "none";
  iframe.style.zIndex = "9999";
  iframe.style.borderRadius = "16px";
  iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
  iframe.style.transition = "all 0.3s ease";
  iframe.style.backgroundColor = "transparent";

  // Initial size - collapsed state (just the button)
  iframe.style.width = "80px";
  iframe.style.height = "80px";

  // Listen for resize messages from the widget
  window.addEventListener("message", (event) => {
    if (event.data.type === "CHAT_WIDGET_RESIZE") {
      const { width, height, isOpen, isMinimized } = event.data.size;

      // Smooth resize animation
      iframe.style.width = width + "px";
      iframe.style.height = height + "px";

      // Adjust shadow based on state
      if (isOpen) {
        iframe.style.boxShadow = "0 8px 30px rgba(0,0,0,0.2)";
      } else {
        iframe.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
      }
    }
  });

  // Add iframe to page when ready
  function addWidget() {
    document.body.appendChild(iframe);

    // Ensure iframe is accessible
    iframe.setAttribute("title", "Customer Support Chat");
    iframe.setAttribute("allow", "microphone; camera");
  }

  if (document.readyState === "complete") {
    addWidget();
  } else {
    window.addEventListener("load", addWidget);
  }

  // Handle page visibility changes
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      // Page is hidden, could pause notifications
      iframe.contentWindow?.postMessage({ type: "PAGE_HIDDEN" }, "*");
    } else {
      // Page is visible, resume notifications
      iframe.contentWindow?.postMessage({ type: "PAGE_VISIBLE" }, "*");
    }
  });

  // Cleanup function (if needed)
  window.removeChatWidget = () => {
    if (iframe && iframe.parentNode) {
      iframe.parentNode.removeChild(iframe);
    }
  };
})();
