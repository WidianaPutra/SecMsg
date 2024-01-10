import prisma from "@/libs/prisma";

export async function PATCH(request, { params }) {
  const { name, message } = await request.json();
  const updateData = await prisma.Message.update({
    where: { id: parseInt(params.id) },
    data: { name, message },
  });
  return Response.json({ message: "Succes brow" });
}
