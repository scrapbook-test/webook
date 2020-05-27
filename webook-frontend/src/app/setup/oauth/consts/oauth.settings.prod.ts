import { AuthConfig } from 'angular-oauth2-oidc';

export const oAuthConfig: AuthConfig = {
  // TODO Set production issuer
  issuer: 'https://localhost:5000',
  redirectUri: window.location.origin,
  clientId: 'webook-frontend',
  scope: 'openid profile',
  requireHttps: true,
  clearHashAfterLogin: true,
  useSilentRefresh: true,
  silentRefreshRedirectUri: window.location.origin + '/assets/oauth/silent-refresh.html',
  showDebugInformation: false
};