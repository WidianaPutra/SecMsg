import prisma from "@/libs/prisma";

export async function DELETE(request, { params }) {
  const DeleteMessage = await prisma.Message.delete({
    where: { id: parseInt(params.id) },
  });
  return Response.json({
    message: "Data berhasil dihapus",
    data: DeleteMessage,
  });
}
