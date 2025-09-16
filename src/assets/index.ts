// assets/index.ts - Archivo para centralizar la gestión de assets
import astroIcon from './astro.svg';
import azuredevopsIcon from './azuredevops.svg';
import backgroundImage from './background.svg';
import bgtechImage from './bgtech.svg';
import logoImage from './logo.svg';
import codeIcon from './ph_code-fill.svg';
import serverSecurityIcon from './server-security.svg';
import teamMeetingIcon from './team-meeting-bold.svg';
import appIcon from './app.png';
import systemIcon from './system.png';
import uiUxIcon from './ui-ux.png';

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
  background: backgroundImage,
  bgtech: bgtechImage,
  logo: logoImage,
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