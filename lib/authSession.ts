type AuthUser = {
  email?: string;
  user_metadata?: {
    first_name?: string;
    last_name?: string;
    avatar_url?: string;
  };
};

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
}
