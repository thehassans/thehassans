import { cookies } from 'next/headers';

const ADMIN_EMAIL = 'hassan.sarwar21@gmail.com';
const ADMIN_PASSWORD = 'Hassan123@';
const SESSION_NAME = 'admin_session';

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_EMAIL && password === ADMIN_PASSWORD;
}

export async function createSession(): Promise<string> {
  const token = Buffer.from(`${ADMIN_EMAIL}:${Date.now()}`).toString('base64');
  return token;
}

export async function setSessionCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(SESSION_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24, // 24 hours
    path: '/',
  });
}

export async function getSession(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_NAME)?.value || null;
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const session = await getSession();
  return !!session;
}
