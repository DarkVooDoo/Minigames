import { CookieOptions } from "./types";

export const CreateCookie = (cookieName: string, cookieValue: any, options?: CookieOptions)=>{
    const {path = "/", sameSite = "Strict", secure = false, expIn = 60*60*24*365} = options ? options : {}
    document.cookie = `${cookieName}=${cookieValue};path=${path};samesite=${sameSite}; max-age=${expIn}; ${secure ? secure : ""}`
}

export const GetCookie = (cookieName: string)=>{
    const seperateCookies = document.cookie.split(";")
    let objectCookies:{[key: string]: string} = {}
    const keyValuePair = seperateCookies.map(item=>{
        const keyValues = item.trim().split("=")
        return keyValues
    })
    for(let [key, value] of keyValuePair){
        objectCookies[key] = value
    }
    return objectCookies[cookieName]
}