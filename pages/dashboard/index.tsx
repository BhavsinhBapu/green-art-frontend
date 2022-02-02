import type { NextPage } from "next";
import {SSRAuthCheck} from "../../middlewares/ssr-authentication-check"
const Index: NextPage = () => {
    return <div>Dashboard</div>;
}

Index.getInitialProps = async (ctx) => {
    await SSRAuthCheck(ctx, "dashboard");
    return {};
}

export default Index;