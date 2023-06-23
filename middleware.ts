import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

import { FRONT_URL } from './lib/utils/urls';

export default function middleware(req: NextRequest) {
    let url = req.url
    // let session = req.cookies.get("session");
    // let username = (session) ? JSON.parse(session.value).username : null;
    // let info = (session) ? JSON.parse(session.value).info : null;

    let username=req.cookies.get('username')?.value;
    let info=req.cookies.get('info');
    let skills=req.cookies.get('skills');
    let profile = FRONT_URL +'/users/'+ username;
    console.log(username);
    console.log(info);
    console.log(skills);
    console.log(FRONT_URL);
    console.log(profile);
    // console.log(session?.value)
    if (username && (url === `${FRONT_URL}/login` || url === `${FRONT_URL}/signup`)) {
        return NextResponse.redirect(profile);
    }

    if (info && skills && (url === `${FRONT_URL}/users/polish` || url === `${FRONT_URL}/users/polish-skills`)) {
        return NextResponse.redirect(profile);
    }

    if(!username && (url === `${FRONT_URL}/users/polish` || url === `${FRONT_URL}/users/polish-skills`)){
        return NextResponse.redirect(`${FRONT_URL}/login`);
    }


}

// dont't forget: use valueOf with cookies to get the value of the cookie