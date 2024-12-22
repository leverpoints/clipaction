import { Client } from "@notionhq/client";

interface Env {
  NOTION_API_KEY: string;
  NOTION_DATABASE_ID: string;
}

export async function onRequestPost(context: { request: Request; env: Env }) {
  try {
    const { name, email, currentApp, usageType } = await context.request.json();
    
    // Initialize Notion client with the environment variable
    const notion = new Client({
      auth: context.env.NOTION_API_KEY
    });

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
    console.error('Notion API Error:', error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 