import React from "react";

export function SneakerIcon({ accent = "#5c7a4a", style = "lowtop" }) {
  const uid = React.useId().replace(/[:]/g, "");
  const strokeProps = {
    stroke: "#232b1b",
    strokeWidth: 1.8,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 260 160" width="100%" height="100%">
      <defs>
        <linearGradient id={`upper-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#f3f5ef" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#232b1b" stopOpacity="0.12" />
        </linearGradient>
        <linearGradient id={`sole-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3d4a30" />
          <stop offset="100%" stopColor="#1c2114" />
        </linearGradient>
        <radialGradient id={`shadow-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="132" cy="140" rx="112" ry="10" fill={`url(#shadow-${uid})`} />

      {style === "hightop" ? (
        <>
          <path
            d="M96 46 C112 30 128 20 144 18 C160 16 170 26 168 40 C167 48 162 54 168 60"
            {...strokeProps}
          />
          <path
            d="M96 46 C112 30 128 20 144 18 C160 16 170 26 168 40 C167 48 162 54 168 60 L182 66 C204 72 226 80 232 98 C236 110 228 120 214 122 L44 122 C34 122 28 120 28 114 C28 94 42 82 60 76 L96 46 Z"
            fill={`url(#upper-${uid})`}
            stroke="#232b1b"
            strokeWidth="1.8"
          />
          <path d="M104 44 C114 52 118 62 116 76" {...strokeProps} strokeWidth="1.4" opacity="0.6" />
        </>
      ) : (
        <path
          d="M30 114 C30 96 44 84 62 80 L126 62 C142 57 152 48 162 36 C170 26 188 28 190 42 C191 50 188 58 196 64 C212 70 230 76 236 94 C240 106 232 118 218 120 L46 120 C36 120 30 118 30 114 Z"
          fill={`url(#upper-${uid})`}
          stroke="#232b1b"
          strokeWidth="1.8"
        />
      )}

      <path
        d={style === "hightop" ? "M60 76 C74 70 86 66 96 60" : "M62 80 C80 74 96 68 110 62"}
        {...strokeProps}
        strokeWidth="1.3"
        opacity="0.55"
      />
      <path
        d={style === "hightop" ? "M64 76 L96 58 M78 68 L108 50 M92 60 L118 44 M104 52 L128 38" : "M66 80 L100 60 M80 74 L112 52 M94 68 L122 46 M108 62 L132 40"}
        stroke={accent}
        strokeWidth="3.4"
        strokeLinecap="round"
        opacity="0.9"
      />
      {(style === "hightop"
        ? [[64,76],[78,68],[92,60],[104,52],[96,58],[108,50],[118,44],[128,38]]
        : [[66,80],[80,74],[94,68],[108,62],[100,60],[112,52],[122,46],[132,40]]
      ).map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.2" fill="#232b1b" opacity="0.7" />
      ))}

      <path
        d="M214 96 C224 100 232 106 232 114 L216 120 C214 112 212 104 214 96 Z"
        fill="#232b1b"
        opacity="0.12"
      />
      <path
        d="M28 114 L232 114 L232 128 C232 133 227 137 220 137 L42 137 C34 137 28 133 28 126 Z"
        fill={`url(#sole-${uid})`}
      />
      <path
        d="M24 134 L236 134 L236 144 C236 150 230 154 222 154 L40 154 C30 154 24 150 24 143 Z"
        fill="#141810"
      />
      <path
        d="M42 144 L42 152 M64 144 L64 152 M86 144 L86 152 M108 144 L108 152 M130 144 L130 152 M152 144 L152 152 M174 144 L174 152 M196 144 L196 152 M216 144 L216 152"
        stroke="#3d4a30"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M60 128 L204 128" stroke={accent} strokeWidth="2" opacity="0.55" />
      <path
        d={style === "hightop" ? "M110 32 C124 26 138 22 150 22" : "M136 46 C150 40 162 34 170 28"}
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function OxfordIcon({ accent = "#5c7a4a" }) {
  const uid = React.useId().replace(/[:]/g, "");
  const strokeProps = {
    stroke: "#232b1b",
    strokeWidth: 1.8,
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  return (
    <svg viewBox="0 0 260 160" width="100%" height="100%">
      <defs>
        <linearGradient id={`leather-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a4632" />
          <stop offset="55%" stopColor="#3c2f21" />
          <stop offset="100%" stopColor="#221a12" />
        </linearGradient>
        <linearGradient id={`sole2-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8dcc4" />
          <stop offset="100%" stopColor="#c9b98f" />
        </linearGradient>
        <radialGradient id={`shadow2-${uid}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="132" cy="140" rx="112" ry="10" fill={`url(#shadow2-${uid})`} />
      <path
        d="M34 112 C34 92 50 80 70 76 L118 66 C132 63 140 56 148 44 C154 34 172 34 176 46 C179 54 176 62 184 68 C202 74 222 80 228 96 C232 106 224 116 212 118 L48 118 C38 118 34 116 34 112 Z"
        fill={`url(#leather-${uid})`}
        stroke="#1a140d"
        strokeWidth="1.8"
      />
      <path d="M70 76 C86 71 100 66 112 60" {...strokeProps} strokeWidth="1.3" opacity="0.7" />
      {[74, 82, 90, 98, 106].map((x, i) => (
        <circle key={i} cx={x} cy={76 - i * 3.6} r="1.1" fill="#c9b98f" opacity="0.85" />
      ))}
      <path d="M148 44 C158 54 162 66 158 78" {...strokeProps} strokeWidth="1.3" opacity="0.5" />
      <path
        d="M118 66 L142 50 M104 71 L130 54 M90 76 L118 58"
        stroke={accent}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.85"
      />
      {[[118,66],[142,50],[104,71],[130,54],[90,76],[118,58]].map(([cx,cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2" fill="#1a140d" />
      ))}
      <path
        d="M32 112 L230 112 L230 122 C230 126 226 129 220 129 L44 129 C36 129 32 126 32 119 Z"
        fill="#1a140d"
        opacity="0.85"
      />
      <path
        d="M28 122 L234 122 L234 136 C234 143 227 148 218 148 L46 148 C36 148 28 143 28 134 Z"
        fill={`url(#sole2-${uid})`}
        stroke="#a8946a"
        strokeWidth="1"
      />
      <path d="M28 133 L234 133" stroke="#a8946a" strokeWidth="1.4" opacity="0.7" />
      <path
        d="M150 46 C160 40 170 36 178 36"
        stroke="#e9d9bd"
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}
