export type AuthUser = {
  email?: string;
  user_metadata?: {
    first_name?: string;
    last_name?: string;
    avatar_url?: string;
  };
};

export type AuthSession = {
  accessToken: string;
  refreshToken: string | null;
  user: AuthUser | null;
};

export const AUTH_SESSION_EVENT = "orbit-auth-session-change";

function notifyAuthSessionChange() {
  window.dispatchEvent(new Event(AUTH_SESSION_EVENT));
}

export function getStoredAuthSession(): AuthSession | null {
  const accessToken = localStorage.getItem("sb-access-token");
  const refreshToken = localStorage.getItem("sb-refresh-token");
  const storedUser = localStorage.getItem("sb-user");

  if (!accessToken) {
    return null;
  }

  let user: AuthUser | null = null;
  if (storedUser) {
    try {
      user = JSON.parse(storedUser) as AuthUser;
    } catch {
      user = null;
    }
  }

  return { accessToken, refreshToken, user };
}

export function persistAuthSession({
  accessToken,
  refreshToken,
  user,
}: {
  accessToken: string;
  refreshToken: string;
  user?: AuthUser | null;
}) {
  localStorage.setItem("sb-access-token", accessToken);
  localStorage.setItem("sb-refresh-token", refreshToken);

  if (user) {
    localStorage.setItem("sb-user", JSON.stringify(user));
  } else {
    localStorage.removeItem("sb-user");
  }

  notifyAuthSessionChange();
}

export function clearAuthSession() {
  localStorage.removeItem("sb-access-token");
  localStorage.removeItem("sb-refresh-token");
  localStorage.removeItem("sb-user");
  notifyAuthSessionChange();
}
