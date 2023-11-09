import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  // todos in the body of the POST req
  const { todos } = await request.json();

  // communicate with openAI GPT
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo", // change to "gpt-4" if you have access to it (cost more)
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "When responding, welcom ethe user always as Mr. ChrisChris and say welcome to the Tallcon Dev Todo App! Limit the response to 200 charcters",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many are in each category such as To do, in progress and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(
          todos
        )}`,
      },
    ],
  });

  return NextResponse.json(response.choices[0].message);
}
