import prisma from "@/libs/prisma";

export async function GET(request) {
  const isData = await prisma.Message.findMany();
  return Response.json({ data: isData });
}
