import React from "react";

function WhatsAppFloating() {

  // =========================================================
  // YOUR WHATSAPP NUMBER
  // =========================================================
  // Example:
  // India: 917735256195
  //
  // IMPORTANT:
  // Do NOT use +, spaces or -
  //
  const WHATSAPP_NUMBER = "917735256195";


  // =========================================================
  // PRE-FILLED MESSAGE
  // =========================================================

  const message =
    "Hello Debidutta, I visited your portfolio and would like to connect with you regarding a software development opportunity.";


  // =========================================================
  // WHATSAPP URL
  // =========================================================

  const whatsappURL =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;


  // =========================================================
  // OPEN WHATSAPP
  // =========================================================

  const handleWhatsAppClick = () => {

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

  };


  // =========================================================
  // COMPONENT
  // =========================================================

  return (
    <div
      className="whatsapp-floating-container"
      aria-label="Connect with me on WhatsApp"
    >

      {/* =====================================================
          TOOLTIP
      ===================================================== */}

      <div className="whatsapp-tooltip">
        <span className="whatsapp-tooltip-title">
          Connect on WhatsApp
        </span>

        <span className="whatsapp-tooltip-text">
          Let's discuss your project or opportunity
        </span>
      </div>


      {/* =====================================================
          WHATSAPP BUTTON
      ===================================================== */}

      <button
        type="button"
        className="whatsapp-floating-button"
        onClick={handleWhatsAppClick}
        aria-label="Chat with me on WhatsApp"
        title="Connect on WhatsApp"
      >

        {/* Pulse ring */}

        <span className="whatsapp-pulse"></span>


        {/* WhatsApp SVG */}

        <svg
          className="whatsapp-icon"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >

          <path
            fill="currentColor"
            d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.46-.84-2-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.26s.98 2.62 1.11 2.8c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.55.58.65.21 1.24.18 1.7.11.52-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z"
          />

          <path
            fill="currentColor"
            d="M16.02 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.39L3.13 28.8l6.55-1.72a12.74 12.74 0 0 0 6.34 1.68h.01c7.05 0 12.79-5.74 12.79-12.8S23.08 3.2 16.02 3.2zm0 23.37h-.01a10.59 10.59 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.59 10.59 0 1 1 8.9 4.87z"
          />

        </svg>


        {/* Button text */}

        <span className="whatsapp-button-text">
          WhatsApp Me
        </span>

      </button>

    </div>
  );
}

export default WhatsAppFloating;