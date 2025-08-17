import * as React from "react"

type IconProps = React.SVGProps<SVGSVGElement>

const Svg = ({ children, ...props }: { children: React.ReactNode } & IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
)

export const ExternalLink = (props: IconProps) => (
  <Svg {...props}>
    <path d="M18 3h3v3" />
    <path d="M21 3l-7 7" />
    <path d="M13 3H6a3 3 0 0 0-3 3v11a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3v-7" />
  </Svg>
)

export const Github = (props: IconProps) => (
  <Svg {...props}>
    <path d="M9 19c-4 1.5-4-2-6-2m12 4v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 18 3.77 5.07 5.07 0 0 0 17.91 1S16.73.65 14 2.48a13.38 13.38 0 0 0-10 0C1.27.65.09 1 .09 1A5.07 5.07 0 0 0 0 3.77 5.44 5.44 0 0 0 1.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 7 19.13V23" />
  </Svg>
)

export const Linkedin = (props: IconProps) => (
  <Svg {...props}>
    <rect x="2" y="9" width="5" height="13" />
    <circle cx="4.5" cy="4.5" r="2.5" />
    <path d="M9 22V9h5v2.5A4.5 4.5 0 0 1 22 16v6h-5v-5a2 2 0 0 0-4 0v5z" />
  </Svg>
)

export const ChevronDown = (props: IconProps) => (
  <Svg {...props}>
    <path d="M6 9l6 6 6-6" />
  </Svg>
)
export const ChevronUp = (props: IconProps) => (
  <Svg {...props}>
    <path d="M18 15l-6-6-6 6" />
  </Svg>
)
export const ChevronLeft = (props: IconProps) => (
  <Svg {...props}>
    <path d="M15 18l-6-6 6-6" />
  </Svg>
)
export const ChevronRight = (props: IconProps) => (
  <Svg {...props}>
    <path d="M9 18l6-6-6-6" />
  </Svg>
)

export const Download = (props: IconProps) => (
  <Svg {...props}>
    <path d="M12 3v12" />
    <path d="M7 10l5 5 5-5" />
    <path d="M5 21h14" />
  </Svg>
)

export const X = (props: IconProps) => (
  <Svg {...props}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </Svg>
)

export const ArrowLeft = (props: IconProps) => (
  <Svg {...props}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </Svg>
)
export const ArrowRight = (props: IconProps) => (
  <Svg {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </Svg>
)

export const Dot = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
  </Svg>
)

export const MoreHorizontal = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="6" cy="12" r="1" />
    <circle cx="12" cy="12" r="1" />
    <circle cx="18" cy="12" r="1" />
  </Svg>
)

export const GripVertical = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="9" cy="5" r="1" />
    <circle cx="15" cy="5" r="1" />
    <circle cx="9" cy="12" r="1" />
    <circle cx="15" cy="12" r="1" />
    <circle cx="9" cy="19" r="1" />
    <circle cx="15" cy="19" r="1" />
  </Svg>
)

export const Check = (props: IconProps) => (
  <Svg {...props}>
    <path d="M20 6L9 17l-5-5" />
  </Svg>
)
export const Circle = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
  </Svg>
)

export const PanelLeft = (props: IconProps) => (
  <Svg {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M9 4v16" />
  </Svg>
)

export const Search = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.35-4.35" />
  </Svg>
)

export const Mail = (props: IconProps) => (
  <Svg {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </Svg>
)
export const Phone = (props: IconProps) => (
  <Svg {...props}>
    <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2 4.18 2 2 0 0 1 4 2h4.09a2 2 0 0 1 2 1.72l.5 3a2 2 0 0 1-.55 1.86L8.09 9.91a16 16 0 0 0 6 6l1.33-1.95a2 2 0 0 1 1.86-.55l3 .5A2 2 0 0 1 22 16.92z" />
  </Svg>
)
export const Send = (props: IconProps) => (
  <Svg {...props}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </Svg>
)

export const Code = (props: IconProps) => (
  <Svg {...props}>
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6l-6 6 6 6" />
  </Svg>
)
export const Database = (props: IconProps) => (
  <Svg {...props}>
    <ellipse cx="12" cy="5" rx="7" ry="3" />
    <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5" />
    <path d="M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
  </Svg>
)
export const Globe = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 0 20" />
    <path d="M12 2a15.3 15.3 0 0 0 0 20" />
  </Svg>
)
export const Laptop = (props: IconProps) => (
  <Svg {...props}>
    <rect x="4" y="4" width="16" height="10" rx="1" />
    <path d="M2 18h20" />
  </Svg>
)
export const Settings = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 3.3l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V2a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.7 7.04l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .42.16.82.46 1.12.3.3.7.46 1.12.46H22a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </Svg>
)

export const GraduationCap = (props: IconProps) => (
  <Svg {...props}>
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c3 2 9 2 12 0v-5" />
  </Svg>
)
export const School = (props: IconProps) => (
  <Svg {...props}>
    <path d="M3 10l9-7 9 7" />
    <path d="M9 22V12h6v10" />
    <path d="M3 22h18" />
  </Svg>
)

export const FileCheck = (props: IconProps) => (
  <Svg {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6" />
    <path d="M9 15l2 2 4-4" />
  </Svg>
)

export const Award = (props: IconProps) => (
  <Svg {...props}>
    <circle cx="12" cy="8" r="5" />
    <path d="M8 13l-2 8 6-3 6 3-2-8" />
  </Svg>
)


