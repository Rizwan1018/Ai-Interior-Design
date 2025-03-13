import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.redirect("/sign-in");
    }
  }
});

export const config = {
  matcher: [
    // Specific routes first
    "/dashboard/:path*",
    "/api/:path*",
    // Catch-all pattern must be last
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};

