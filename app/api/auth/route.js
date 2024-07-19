import jwt from 'jsonwebtoken';
import { serialize } from "cookie";

export async function POST(req) {
    const { email } = await req.json();
    const generatedToken = jwt.sign({ email }, process.env.PRIVATE_KEY, { expiresIn: "24h" });

    const headers = {
        "Set-Cookie": serialize("token", generatedToken, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24
        })
    }

    return Response.json({ message: "successfully !" }, { status: 200, headers });
}