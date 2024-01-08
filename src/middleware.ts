import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
//TODO server auth api;
const isAuthenticated = true;

export function middleware(request: NextRequest) {

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/dashboard/login', request.url))
    }
}

export const config = {
    // TODO Исключить Login
    matcher: ['/dashboard','/dashboard/((?!login).*)'],
}
