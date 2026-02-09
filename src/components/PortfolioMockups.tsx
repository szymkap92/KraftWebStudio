import type { ReactNode } from "react";

interface MockupProps {
  className?: string;
}

export function RestaurantMockup({ className }: MockupProps): ReactNode {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      {/* Background */}
      <rect width="400" height="300" rx="8" fill="#fafafa" />
      {/* Header */}
      <rect width="400" height="40" fill="#1e293b" />
      <rect x="16" y="14" width="60" height="12" rx="2" fill="#f59e0b" />
      <rect x="240" y="16" width="30" height="8" rx="2" fill="#94a3b8" />
      <rect x="280" y="16" width="30" height="8" rx="2" fill="#94a3b8" />
      <rect x="320" y="16" width="30" height="8" rx="2" fill="#94a3b8" />
      <rect x="356" y="12" width="28" height="16" rx="4" fill="#f59e0b" />
      {/* Hero image area */}
      <rect x="0" y="40" width="400" height="120" fill="#d4a574" opacity="0.3" />
      <rect x="120" y="70" width="160" height="16" rx="2" fill="#1e293b" />
      <rect x="140" y="96" width="120" height="10" rx="2" fill="#64748b" />
      <rect x="160" y="116" width="80" height="24" rx="4" fill="#f59e0b" />
      {/* Menu section */}
      <rect x="24" y="176" width="80" height="10" rx="2" fill="#1e293b" />
      <rect x="24" y="196" width="160" height="6" rx="1" fill="#e2e8f0" />
      <rect x="24" y="210" width="140" height="6" rx="1" fill="#e2e8f0" />
      <rect x="24" y="224" width="150" height="6" rx="1" fill="#e2e8f0" />
      <rect x="216" y="176" width="80" height="10" rx="2" fill="#1e293b" />
      <rect x="216" y="196" width="160" height="6" rx="1" fill="#e2e8f0" />
      <rect x="216" y="210" width="140" height="6" rx="1" fill="#e2e8f0" />
      <rect x="216" y="224" width="150" height="6" rx="1" fill="#e2e8f0" />
      {/* Footer */}
      <rect x="0" y="260" width="400" height="40" fill="#1e293b" />
      <rect x="160" y="274" width="80" height="8" rx="2" fill="#64748b" />
    </svg>
  );
}

export function ElektroMockup({ className }: MockupProps): ReactNode {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect width="400" height="300" rx="8" fill="#fafafa" />
      {/* Header */}
      <rect width="400" height="40" fill="#ffffff" />
      <rect x="0" y="40" width="400" height="1" fill="#e2e8f0" />
      <rect x="16" y="14" width="80" height="12" rx="2" fill="#2563eb" />
      <rect x="300" y="12" width="84" height="16" rx="4" fill="#2563eb" />
      {/* Hero */}
      <rect x="0" y="41" width="400" height="100" fill="#eff6ff" />
      <rect x="24" y="60" width="180" height="14" rx="2" fill="#1e293b" />
      <rect x="24" y="82" width="140" height="8" rx="2" fill="#64748b" />
      <rect x="24" y="98" width="120" height="8" rx="2" fill="#64748b" />
      <rect x="24" y="116" width="80" height="20" rx="4" fill="#2563eb" />
      <rect x="280" y="56" width="100" height="76" rx="6" fill="#dbeafe" />
      {/* Services grid */}
      <rect x="24" y="160" width="100" height="10" rx="2" fill="#1e293b" />
      <rect x="24" y="182" width="108" height="60" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="146" y="182" width="108" height="60" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <rect x="268" y="182" width="108" height="60" rx="6" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
      <circle cx="78" cy="202" r="10" fill="#dbeafe" />
      <circle cx="200" cy="202" r="10" fill="#dbeafe" />
      <circle cx="322" cy="202" r="10" fill="#dbeafe" />
      <rect x="50" y="220" width="56" height="6" rx="1" fill="#e2e8f0" />
      <rect x="172" y="220" width="56" height="6" rx="1" fill="#e2e8f0" />
      <rect x="294" y="220" width="56" height="6" rx="1" fill="#e2e8f0" />
      {/* Footer */}
      <rect x="0" y="264" width="400" height="36" fill="#1e293b" />
      <rect x="160" y="278" width="80" height="6" rx="2" fill="#64748b" />
    </svg>
  );
}

export function FashionShopMockup({ className }: MockupProps): ReactNode {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect width="400" height="300" rx="8" fill="#fafafa" />
      {/* Header with cart */}
      <rect width="400" height="40" fill="#ffffff" />
      <rect x="0" y="40" width="400" height="1" fill="#e2e8f0" />
      <rect x="16" y="12" width="70" height="16" rx="2" fill="#1e293b" />
      <rect x="140" y="16" width="30" height="8" rx="2" fill="#64748b" />
      <rect x="180" y="16" width="30" height="8" rx="2" fill="#64748b" />
      <rect x="220" y="16" width="30" height="8" rx="2" fill="#64748b" />
      <circle cx="370" cy="20" r="10" fill="none" stroke="#1e293b" strokeWidth="1.5" />
      <rect x="366" y="14" width="8" height="6" rx="1" fill="#1e293b" />
      {/* Featured banner */}
      <rect x="0" y="41" width="400" height="80" fill="#fce7f3" />
      <rect x="24" y="62" width="140" height="12" rx="2" fill="#1e293b" />
      <rect x="24" y="82" width="100" height="8" rx="2" fill="#64748b" />
      <rect x="24" y="98" width="60" height="16" rx="4" fill="#1e293b" />
      <rect x="300" y="52" width="80" height="60" rx="4" fill="#fbcfe8" />
      {/* Product grid */}
      <rect x="24" y="136" width="80" height="10" rx="2" fill="#1e293b" />
      {[0, 1, 2, 3].map((i) => {
        const x = 24 + (i % 4) * 92;
        return (
          <g key={i}>
            <rect x={x} y="156" width="80" height="90" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <rect x={x + 8} y="164" width="64" height="44" rx="2" fill={["#fce7f3", "#dbeafe", "#dcfce7", "#fef3c7"][i]} />
            <rect x={x + 8} y="216" width="40" height="6" rx="1" fill="#1e293b" />
            <rect x={x + 8} y="228" width="24" height="6" rx="1" fill="#64748b" />
          </g>
        );
      })}
      {/* Footer */}
      <rect x="0" y="264" width="400" height="36" fill="#1e293b" />
    </svg>
  );
}

export function BioShopMockup({ className }: MockupProps): ReactNode {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <rect width="400" height="300" rx="8" fill="#fafafa" />
      {/* Header */}
      <rect width="400" height="40" fill="#365314" />
      <rect x="16" y="12" width="70" height="16" rx="2" fill="#84cc16" />
      <rect x="320" y="12" width="64" height="16" rx="4" fill="#84cc16" />
      {/* Hero */}
      <rect x="0" y="40" width="400" height="90" fill="#f0fdf4" />
      <rect x="24" y="56" width="200" height="14" rx="2" fill="#1e293b" />
      <rect x="24" y="78" width="160" height="8" rx="2" fill="#64748b" />
      <rect x="24" y="96" width="80" height="20" rx="4" fill="#365314" />
      <rect x="300" y="52" width="80" height="68" rx="8" fill="#dcfce7" />
      {/* Categories */}
      <rect x="24" y="146" width="80" height="10" rx="2" fill="#1e293b" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={24 + i * 122} y="166" width="110" height="36" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
          <circle cx={52 + i * 122} cy="184" r="8" fill="#bbf7d0" />
          <rect x={66 + i * 122} y="180" width="50" height="8" rx="2" fill="#365314" />
        </g>
      ))}
      {/* Products */}
      {[0, 1, 2, 3].map((i) => {
        const x = 24 + (i % 4) * 92;
        return (
          <g key={i}>
            <rect x={x} y="216" width="80" height="44" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1" />
            <rect x={x + 8} y="222" width="30" height="20" rx="2" fill="#dcfce7" />
            <rect x={x + 44} y="224" width="28" height="6" rx="1" fill="#1e293b" />
            <rect x={x + 44} y="234" width="20" height="5" rx="1" fill="#84cc16" />
          </g>
        );
      })}
      {/* Footer */}
      <rect x="0" y="272" width="400" height="28" fill="#365314" />
    </svg>
  );
}

export const MOCKUP_COMPONENTS = [
  RestaurantMockup,
  ElektroMockup,
  FashionShopMockup,
  BioShopMockup,
];
