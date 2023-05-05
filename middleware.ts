import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
    let verify = req.cookies.get("loggedin");
    let url = req.url

    if (!verify && url.includes('/dashboard')) {
        return NextResponse.redirect("http://localhost:3000/");
    }

    if (verify && url === "http://localhost:3000/") {
        return NextResponse.redirect("http://localhost:3000/dashboard");
    }


}