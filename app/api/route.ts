import { NextResponse } from "next/server";
export async function GET(request: Request) {
  console.log(request);
  const articles = [{ id: 1, title: "Next.js Route Handler Example" }];
  return NextResponse.json(articles);
}

export async function POST(request: Request) {
//   const newArticle = await request.json();
  // Process the new article (e.g., save it to a database)
  return NextResponse.json({ message: "Article created!" });
}

export async function DELETE(request: Request) {
    // Extract query or body data to delete a specific resource
    return NextResponse.json({ message: "Article deleted!" });
  } 