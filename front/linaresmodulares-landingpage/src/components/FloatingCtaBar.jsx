import React from "react";

const quickActions = [
  { label: "Llamar", href: "tel:+573193014722", detail: "Respuesta inmediata" },
  { label: "WhatsApp", href: "https://wa.me/573193014722", detail: "Coordina visita o video" },
  { label: "Cotizar ahora", href: "#contacto", detail: "Formulario listo para Ads" },
];

export function FloatingCtaBar() {
  return (
    <div className="floating-cta" aria-label="Accesos rápidos de contacto">
      {quickActions.map((action) => (
        <a key={action.label} className="floating-cta__item" href={action.href} target={action.href.startsWith('http') ? "_blank" : undefined} rel={action.href.startsWith('http') ? "noreferrer" : undefined}>
          <span className="floating-cta__label">{action.label}</span>
          <small className="floating-cta__detail">{action.detail}</small>
        </a>
      ))}
    </div>
  );
}
