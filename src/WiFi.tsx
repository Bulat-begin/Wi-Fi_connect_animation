import React, { useState } from "react";

const WifiAnimation: React.FC = () => {
  const [isConnecting, setIsConnecting] = useState<boolean>(false);

  const handleConnectClick = (): void => {
    setIsConnecting(true);
    setTimeout(() => {
      setIsConnecting(false);
    }, 3000);
  };

  return (
    <div className="App">
      <svg
        className={`wifi ${isConnecting ? "wifi--animated" : ""}`}
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
        aria-hidden="true"
      >
        <defs>
          <clipPath id="clip-path">
            <polygon points="-2,-2 50,-2 24,28" />
          </clipPath>
        </defs>
        <g transform="translate(0,10)">
          <g>
            <g clip-path="url(#clip-path)">
              <g fill="none" stroke="hsl(223,90%,85%)" stroke-width="4">
                <circle className="wifi__wave" r="28" cx="24" cy="28" />
                <circle className="wifi__wave" r="19" cx="24" cy="28" />
                <circle className="wifi__wave" r="10" cx="24" cy="28" />
              </g>
            </g>
            <circle
              className="wifi__dot"
              r="3"
              cx="24"
              cy="28"
              fill="hsl(223,90%,85%)"
            />
          </g>
          <g className="wifi__fg" opacity="0" data-anim>
            <g clip-path="url(#clip-path)">
              <g
                className="wifi__waves-pivot"
                fill="none"
                stroke="hsl(223,90%,15%)"
                stroke-width="4"
              >
                <circle
                  className="wifi__wave"
                  r="28"
                  cx="24"
                  cy="28"
                  stroke-dasharray="14.66 161.27"
                />
                <circle
                  className="wifi__wave"
                  r="19"
                  cx="24"
                  cy="28"
                  stroke-dasharray="9.95 109.43"
                />
                <circle
                  className="wifi__wave"
                  r="10"
                  cx="24"
                  cy="28"
                  stroke-dasharray="5.24 57.5"
                />
              </g>
            </g>
            <circle
              className="wifi__dot"
              r="3"
              cx="24"
              cy="28"
              fill="hsl(223,90%,15%)"
            />
            <g className="wifi__stick-pivot" fill="hsl(223,90%,15%)">
              <g className="wifi__stick-bounce">
                <rect
                  className="wifi__stick"
                  x="22"
                  y="-2"
                  width="4"
                  height="28"
                />
                <polygon
                  className="wifi__stick-left"
                  points="22,-2 26,-2 24,26"
                />
                <polygon
                  className="wifi__stick-right"
                  points="22,-2 26,-2 24,26"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>

      <button
        onClick={handleConnectClick}
        disabled={isConnecting}
        className="btn"
      >
        {isConnecting ? "Connecting…" : "Connect"}
      </button>
    </div>
  );
};

export default WifiAnimation;
