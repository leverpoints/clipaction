import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { name, email, currentApp, usageType } = await req.json();
    const response = await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID!,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email: email,
        },
        Apps: {
          rich_text: [
            {
              text: {
                content: currentApp || "Not specified",
              },
            },
          ],
        },
        Usage: {
          rich_text: [
            {
              text: {
                content: usageType || "Not specified",
              },
            },
          ],
        },
      },
    });

    return NextResponse.json({ message: "Success!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
