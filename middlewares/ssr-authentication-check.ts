import { parseCookies } from "nookies"


export const SSRAuthCheck= async (ctx: any,redirect:string) => {
    const cookies = parseCookies(ctx)
    if (cookies.token) {
        ctx.token = cookies.token
    } else {
        if(redirect){
            ctx.res.writeHead(302, { Location: "/authentication/signin" + "?redirect=" + redirect });
            ctx.res.end();
        }
    }
}