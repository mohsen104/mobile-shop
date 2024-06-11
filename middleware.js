import { NextResponse } from "next/server"
import data from '@/data/mobile.json'

const isExitsPage = (id) => {
    const dataChecked = data.some(el => {
        if (el.id == id) { return el }
    })
    return dataChecked;
}

export function middleware(request) {
    const p = request.nextUrl.searchParams.get('p');
    if (p) {
        const isExits = isExitsPage(p);
        if (isExits) {
            return NextResponse.redirect(new URL(`/shop/${p}`, request.url))
        } else {
            return NextResponse.redirect(new URL('/', request.url))
        }
    }

};

export const config = {
    matcher: '/'
}