# Assets Management Guide

## Estructura de Assets

Este proyecto usa un sistema centralizado para manejar las imágenes y assets. Todos los assets están organizados en `/src/assets/` y se gestionan a través del archivo `index.ts`.

## Archivos de Assets Disponibles

- `astro.svg` - Icono de Astro
- `azuredevops.svg` - Icono de Azure DevOps  
- `background.svg` - Imagen de fondo principal
- `bgtech.svg` - Imagen de fondo tecnológico
- `logo.svg` - Logo de la empresa
- `ph_code-fill.svg` - Icono de código
- `server-security.svg` - Icono de seguridad de servidor
- `team-meeting-bold.svg` - Icono de reunión de equipo
- `app.png` - Icono de aplicación móvil
- `system.png` - Icono de sistema/integración
- `ui-ux.png` - Icono de diseño UI/UX

## Cómo usar los Assets

### Importación Centralizada
```typescript
import { serviceIcons, assets } from '../assets/index.ts';
```

### Uso en Componentes
```astro
// Para servicios específicos
<img src={serviceIcons.webDevelopment.src} alt="Web Development" />

// Para assets generales
<img src={assets.logo.src} alt="Logo" />
```

## Estructura del Sistema

### 1. `/src/assets/index.ts`
- Centraliza todas las importaciones de assets
- Exporta configuraciones de iconos por servicio
- Proporciona helper functions para URLs

### 2. Componentes que usan Assets
- `Services.astro` - Usa `serviceIcons` para las cards de servicios
- `Navigation.astro` - Usa `assets.logo` para el logo
- `PrincipalBanner.astro` - Usa background images

### 3. Cards System
- `cards/serv1.astro` - Componente reutilizable para mostrar servicios
- Acepta props: `title`, `image`, `description`
- Maneja imágenes con `object-contain` para SVGs

## Beneficios de esta Estructura

1. **Mantenibilidad**: Cambios centralizados
2. **Type Safety**: TypeScript garantiza que los assets existen
3. **Performance**: Vite optimiza automáticamente las imágenes
4. **Consistency**: Uso consistente de assets en toda la aplicación
5. **Escalabilidad**: Fácil agregar nuevos assets

## Mapeo de Servicios a Iconos

Los servicios están mapeados a sus iconos correspondientes de la siguiente manera:

```typescript
// Iconos de servicios actuales:
- webDevelopment → ph_code-fill.svg (Icono de código)
- mobileApp → app.png (Icono de aplicación móvil)
- cloudSolutions → system.png (Icono de sistema/integración)
- uiUxDesign → ui-ux.png (Icono de diseño UI/UX)
- systemIntegration → system.png (Icono de sistema/integración)
- devops → azuredevops.svg (Icono de Azure DevOps)
- consulting → team-meeting-bold.svg (Icono de reunión de equipo)
- cybersecurity → server-security.svg (Icono de seguridad)
- legacyModernization → system.png (Icono de sistema)
```

## Agregar Nuevos Assets

1. Coloca el archivo en `/src/assets/`
2. Importa en `/src/assets/index.ts`
3. Agrega al objeto `assets` correspondiente
4. Usa en tus componentes a través de las exportaciones