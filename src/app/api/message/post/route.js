import prisma from "@/libs/prisma";

export async function POST(request) {
  const { name, message } = await request.json();
  console.log(name, message);
  const isPostData = await prisma.Message.create({ data: { name, message } });
  return Response.json({ isPostData });
}
