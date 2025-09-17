// assets/index.ts - Archivo para centralizar la gestión de assets
import astroIcon from './astro.svg';
import azuredevopsIcon from './azuredevops.svg';
import bgtechImage from './bgtech.svg';
import logoImage from './logo.svg';
import codeIcon from './ph_code-fill.svg';
import serverSecurityIcon from './server-security.svg';
import teamMeetingIcon from './team-meeting-bold.svg';
import appIcon from './app.png';
import systemIcon from './system.png';
import uiUxIcon from './ui-ux.png';
// Imágenes de fondo para banners dinámicos
import bg2Image from './bg2.jpg';
import patternsBgImage from './patternsbg.jpg';
import bg3Image from './bg3.jpg';
import bg4Image from './bg4.jpg';
import bg5Image from './bg5.jpg';

// Exportar todas las imágenes con nombres descriptivos
export const assets = {
  // Iconos de servicios
  astro: astroIcon,
  code: codeIcon,
  teamMeeting: teamMeetingIcon,
  serverSecurity: serverSecurityIcon,
  azureDevops: azuredevopsIcon,
  app: appIcon,
  system: systemIcon,
  uiUx: uiUxIcon,
  
  // Imágenes de fondo y branding
  bgtech: bgtechImage,
  bg2: bg2Image,
  patternsBg: patternsBgImage,
  bg3: bg3Image,
  bg4: bg4Image,
  bg5: bg5Image,
  logo: logoImage,
} as const;

// Configuración específica de fondos para banners dinámicos
// Optimizada para consistencia UX/UI y mejor legibilidad de texto
export const backgroundAssets = {
  home: bgtechImage,        // Fondo técnico principal - oscuro con patrones tech
  about: bgtechImage,       // Consistencia con home para cohesión visual
  services: bgtechImage,    // Mismo fondo técnico para servicios tech
  contact: bg2Image,        // Fondo diferenciado para contacto - más cálido
  blog: bgtechImage,        // Consistencia con otras páginas de contenido
  default: bgtechImage,     // Fondo por defecto técnico para coherencia
} as const;

// Tipos para TypeScript
export type AssetKey = keyof typeof assets;

// Helper function para obtener la URL de un asset
export function getAssetUrl(key: AssetKey): string {
  return assets[key].src;
}

// Configuración de servicios con sus respectivos iconos
export const serviceIcons = {
  webDevelopment: assets.code,
  mobileApp: assets.app,
  cloudSolutions: assets.system,
  uiUxDesign: assets.uiUx,
  systemIntegration: assets.system,
  devops: assets.azureDevops,
  consulting: assets.teamMeeting,
  cybersecurity: assets.serverSecurity,
  legacyModernization: assets.system,
} as const;