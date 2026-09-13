import React from "react";

/* =========================================================
   SocialLinks Component
   LinkedIn | GitHub | Instagram | Email | WhatsApp | Phone
   No external icon library required
========================================================= */

const SocialLinks = ({ isDark = false }) => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/debiduttabehera",
      type: "linkedin",
    },
    {
      name: "GitHub",
      url: "https://github.com/Mr-Debi",
      type: "github",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/mr.debi_",
      type: "instagram",
    },
    {
      name: "Email",
      url: "mailto:debiduttabehera5@gmail.com",
      type: "email",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917735256195",
      type: "whatsapp",
    },
    {
      name: "Call",
      url: "tel:+917735256195",
      type: "phone",
    },
  ];

  /* ---------------------------------------------------------
     Open social link
  --------------------------------------------------------- */
  const handleClick = (item) => {
    if (item.type === "email") {
      window.location.href = item.url;
      return;
    }

    if (item.type === "phone") {
      window.location.href = item.url;
      return;
    }

    window.open(item.url, "_blank", "noopener,noreferrer");
  };

  /* ---------------------------------------------------------
     SVG Icons
  --------------------------------------------------------- */
  const Icon = ({ type }) => {
    switch (type) {
      /* LinkedIn */
      case "linkedin":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="social-icon"
          >
            <path
              fill="currentColor"
              d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.38 4.27 5.48v6.26zM5.32 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM3.54 20.45H7.1V9H3.54v11.45z"
            />
          </svg>
        );

      /* GitHub */
      case "github":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="social-icon"
          >
            <path
              fill="currentColor"
              d="M12 .5A11.5 11.5 0 0 0 8.36 22.9c.58.11.79-.25.79-.56v-2.16c-3.22.7-3.9-1.55-3.9-1.55-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.57-.29-5.27-1.29-5.27-5.74 0-1.27.45-2.31 1.19-3.12-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.17 1.19A11 11 0 0 1 12 6.26c.98 0 1.97.13 2.89.38 2.2-1.5 3.17-1.19 3.17-1.19.63 1.6.23 2.79.11 3.08.74.81 1.19 1.85 1.19 3.12 0 4.46-2.71 5.45-5.29 5.73.41.36.78 1.07.78 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z"
            />
          </svg>
        );

      /* Instagram */
      case "instagram":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="social-icon"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="5"
              ry="5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle
              cx="12"
              cy="12"
              r="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
          </svg>
        );

      /* Email */
      case "email":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="social-icon"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 7l8 6 8-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      /* WhatsApp */
      case "whatsapp":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="social-icon"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              d="M20.5 11.5a8.5 8.5 0 0 1-12.62 7.43L3.5 20.5l1.57-4.25A8.5 8.5 0 1 1 20.5 11.5Z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              d="M8.3 8.4c.2-.45.42-.47.7-.47h.5c.18 0 .38.07.47.34l.65 1.55c.08.2.06.36-.06.53l-.42.57c-.13.17-.1.31 0 .47.35.58.85 1.04 1.43 1.38.17.1.3.12.46-.02l.55-.53c.16-.16.31-.2.52-.1l1.48.7c.2.1.3.2.27.4-.08.58-.36 1.08-.88 1.35-.42.22-.98.22-1.48.08-1.1-.31-2.2-1.03-3.13-1.92-.77-.73-1.45-1.6-1.7-2.58-.13-.5-.12-1.05.1-1.45Z"
            />
          </svg>
        );

      /* Phone */
      case "phone":
        return (
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="social-icon"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.6 3.5 9 3l2 4.5-1.8 1.8a14.5 14.5 0 0 0 5.5 5.5l1.8-1.8 4.5 2-.5 2.4c-.2.9-1 1.6-1.9 1.6C10.6 19 5 13.4 5 6.4c0-.9.7-1.7 1.6-1.9Z"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className={`social-links ${isDark ? "dark" : "light"}`}>
        {socialLinks.map((item) => (
          <button
            key={item.name}
            type="button"
            className={`social-button ${item.type}`}
            onClick={() => handleClick(item)}
            aria-label={item.name}
            title={item.name}
          >
            <Icon type={item.type} />

            <span className="social-tooltip">
              {item.name}
            </span>
          </button>
        ))}
      </div>

      <style>{`
        .social-links {
          display: flex;
          align-items: center;
          justify-content: end;
          gap: 5px;
          flex-wrap: wrap;
          padding: 10px 0;
        }

        .social-button {
          position: relative;
          width: 30px;
          height: 30px;
          padding: 0;
          border: 1px solid rgba(128, 128, 128, 0.25);
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.08);
          color: inherit;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease;
        }

        .social-links.light .social-button {
          background: rgba(255, 255, 255, 0.8);
          color: #222;
        }

        .social-links.dark .social-button {
          background: rgba(20, 20, 25, 0.7);
          color: #fff;
        }

        .social-icon {
          width: 20px;
          height: 20px;
          display: block;
        }

        .social-button:hover {
          transform: translateY(-5px) scale(1.08);
        }

        .social-button:active {
          transform: translateY(-2px) scale(0.98);
        }

        /* LinkedIn */
        .social-button.linkedin:hover {
          background: #0a66c2;
          border-color: #0a66c2;
          color: #fff;
          box-shadow: 0 8px 25px rgba(10, 102, 194, 0.35);
        }

        /* GitHub */
        .social-button.github:hover {
          background: #24292f;
          border-color: #24292f;
          color: #fff;
          box-shadow: 0 8px 25px rgba(36, 41, 47, 0.35);
        }

        /* Instagram */
        .social-button.instagram:hover {
          background: #e1306c;
          border-color: #e1306c;
          color: #fff;
          box-shadow: 0 8px 25px rgba(225, 48, 108, 0.35);
        }

        /* Email */
        .social-button.email:hover {
          background: #ea4335;
          border-color: #ea4335;
          color: #fff;
          box-shadow: 0 8px 25px rgba(234, 67, 53, 0.35);
        }

        /* WhatsApp */
        .social-button.whatsapp:hover {
          background: #25d366;
          border-color: #25d366;
          color: #fff;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.35);
        }

        /* Phone */
        .social-button.phone:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: #fff;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.35);
        }

        /* Tooltip */
        .social-tooltip {
          position: absolute;
          bottom: calc(100% + 10px);
          left: 50%;

          transform:
            translateX(-50%)
            translateY(5px);

          padding: 6px 10px;
          border-radius: 6px;

          background: #111;
          color: #fff;

          font-size: 12px;
          font-weight: 500;
          line-height: 1;

          white-space: nowrap;

          pointer-events: none;
          opacity: 0;
          visibility: hidden;

          transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s ease;

          z-index: 100;
        }

        .social-tooltip::after {
          content: "";

          position: absolute;
          top: 100%;
          left: 50%;

          transform: translateX(-50%);

          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 5px solid #111;
        }

        .social-button:hover .social-tooltip {
          opacity: 1;
          visibility: visible;

          transform:
            translateX(-50%)
            translateY(50%);
        }

        /* Accessibility */
        .social-button:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 3px;
        }

        /* Mobile */
        @media (max-width: 600px) {
          .social-links {
            gap: 9px;
          }

          .social-button {
            width: 42px;
            height: 42px;
          }

          .social-icon {
            width: 19px;
            height: 19px;
          }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .social-button,
          .social-tooltip {
            transition: none;
          }
        }
      `}</style>
    </>
  );
};

export default SocialLinks;
