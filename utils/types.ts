export type CookieOptions = {
    path?: string,
    secure?: boolean,
    sameSite?: "Strict" | "Lax" | "None"
    expIn?: number
}