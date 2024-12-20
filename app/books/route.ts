// Utilities
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
   const url = new URL(request.url);
   const genre = url.searchParams.get("genre");

   try {
      const responseFetch = await fetch(`https://freetestapi.com/api/v1/books?genre=${genre}`);

      if (!responseFetch.ok) {
         throw new Error("Failed to fetch books");
      }

      const books = await responseFetch.json();
      return NextResponse.json({ books }, { status: 200 });
   } catch (error) {
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
   }
}
