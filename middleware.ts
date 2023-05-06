import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import CONSTANTS from "./config.json";

const {frontEndHostDev}=CONSTANTS;

export default function middleware(req: NextRequest) {
    let url = req.url
    let session = req.cookies.get("session");
    let username=(session)?JSON.parse(session.value).username:null;
    let profile=frontEndHostDev+username;
    console.log(process.env.FRONT_HOST);
    // console.log(session?.value)
    if (session && url === `${frontEndHostDev}/login`) {
        return NextResponse.redirect(profile);
    }
    // if(verify && url === "http://localhost:3000/signup"){
    //     return NextResponse.redirect("http://localhost:3000/");
    // }



}