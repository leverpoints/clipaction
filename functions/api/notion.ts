import { Client } from "@notionhq/client";

interface Env {
  NOTION_API_KEY: string;
  NOTION_DATABASE_ID: string;
}

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { name, email, currentApp, usageType } = await context.request.json();
    
    await notion.pages.create({
      parent: {
        database_id: context.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [{ text: { content: name } }],
        },
        Email: {
          email: email,
        },
        Apps: {
          rich_text: [{ text: { content: currentApp || "Not specified" } }],
        },
        Usage: {
          rich_text: [{ text: { content: usageType || "Not specified" } }],
        },
      },
    });

    return new Response(JSON.stringify({ message: "Success!" }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 