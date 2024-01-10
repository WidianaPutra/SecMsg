import PopupMenu from "@/components/header";
import prisma from "@/libs/prisma";
import "@/style/dashboard.css";
export default async function Dashboard() {
  const data = await prisma.Message.findMany();
  return (
    <>
      <PopupMenu />
      <div className="container-card w-full flex justify-around items-center flex-wrap">
        {data.map((result, index) => (
          <div className="card p-4 " key={index}>
            <p className="text-2xl py-2 font-bold">Nama: {result.name}</p>
            <h3 className="msg">Pesan: {result.message}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
