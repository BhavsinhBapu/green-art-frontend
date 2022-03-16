import { parseCookies } from "nookies";
import { GetUserInfoByTokenServer } from "service/user";

export const SSRAuthCheck = async (ctx: any, redirect: string) => {
  const cookies = parseCookies(ctx);
  if (cookies.token) {
    ctx.token = cookies.token;
    const profile: any = await GetUserInfoByTokenServer(cookies.token);
    if (profile?.success === false && profile?.g2f_enabled === "1") {
      ctx.res.writeHead(302, {
        Location: "/authentication/g2f-verify",
      });
      ctx.res.end();
      return;
    }
  } else {
    if (redirect) {
      ctx.res.writeHead(302, {
        Location: "/authentication/signin" + "?redirect=" + redirect,
      });
      ctx.res.end();
    }
    return false;
  }
};

export const authPageRequireCheck = async (ctx: any) => {
  const cookies = parseCookies(ctx);
  if (cookies.token) {
    const profile: any = await GetUserInfoByTokenServer(cookies.token);
    if (profile?.success === false && profile?.g2f_enabled === "1") {
      ctx.res.writeHead(302, {
        Location: "/authentication/g2f-verify",
      });
      ctx.res.end();
      return;
    }
  }
  if (cookies.token) {
    ctx.res.writeHead(302, {
      Location: "/exchange/dashboard",
    });
    ctx.res.end();
  }
};
export const g2fPageRequireCheck = async (ctx: any) => {
  const cookies = parseCookies(ctx);
  if (!cookies.token) {
    ctx.res.writeHead(302, {
      Location: "/exchange/dashboard",
    });
    ctx.res.end();
  }
};
