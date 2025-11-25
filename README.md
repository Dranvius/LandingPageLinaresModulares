# Landing corporativa de Linares Modulares

Landing page orientada a SEO local en Bogotá y conversión B2B para mobiliario empresarial, con formulario conectado al backend NestJS para envío de leads por correo.

## Ejecutar en desarrollo

```bash
cd front/linaresmodulares-landingpage
npm install
npm run dev
```

El backend NestJS puede iniciarse en paralelo:

```bash
cd back
npm install
npm run start:dev
```

## Despliegue con Docker

Build y ejecución de forma aislada:

```bash
docker build -t linaresmodulares-frontend ./front/linaresmodulares-landingpage
docker run -p 80:80 -e VITE_API_URL=http://localhost:3000 linaresmodulares-frontend
```

Con backend y frontend orquestados:

```bash
docker-compose up --build
```

Servicios expuestos:

- Frontend: http://localhost
- Backend: http://localhost:3000

Variables relevantes para el correo SMTP (Gmail):

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_TO`
- `ALLOWED_ORIGIN`

## Estructura clave

- `front/linaresmodulares-landingpage/src/pages/Home.jsx`: landing corporativa, copy SEO y formulario.
- `front/linaresmodulares-landingpage/src/pages/Service.jsx`: páginas de servicio con carrusel de productos y CTA SEO.
- `back/src/main.ts`: bootstrap NestJS con prefijo `/api` y CORS.
- `back/src/contact`: módulo de contacto que envía correos vía SMTP TLS.
- `front/linaresmodulares-landingpage/public/robots.txt` y `sitemap.xml`: archivos SEO para rastreo.
- `front/linaresmodulares-landingpage/Dockerfile` y `docker-compose.yml`: despliegue en contenedores.
