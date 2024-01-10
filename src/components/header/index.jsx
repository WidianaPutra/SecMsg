"use client";
import { useState } from "react";
import styles from "@/app/PopupMenu.module.css";
import { useRouter } from "next/navigation";

const PopupMenu = () => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isName, setIsName] = useState("");
  const [isMsg, setIsMsg] = useState("");

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const SaveData = async () => {
    if (isMsg && isName) {
      setIsPopupOpen(!isPopupOpen);
      const response = await fetch("/api/message/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: isName, message: isMsg }),
      });
      router.refresh();
      setIsMsg("");
      setIsName("");
    } else {
      return alert("Lengkapi Form");
    }
  };

  let className =
    "bg-green-700 px-8 py-2 rounded-2xl mx-2 my-3 hover:scale-105";

  return (
    <div className={styles.popupContainer}>
      {isPopupOpen ? (
        <>
          <button className={className} onClick={SaveData}>
            Save
          </button>
          <button
            className="bg-red-600 px-8 py-2 rounded-2xl mx-2 my-3 hover:scale-105"
            onClick={togglePopup}
          >
            Back
          </button>
        </>
      ) : (
        <>
          <button className={className} onClick={togglePopup}>
            New
          </button>
        </>
      )}
      {isPopupOpen && (
        <div className={`${styles.popup} flex justify-center items-center`}>
          <div className="inputColloms flex flex-col w-full items-center">
            <input
              type="text"
              placeholder="name"
              className="my-5"
              style={inputStyle}
              value={isName}
              onChange={(e) => setIsName(e.target.value)}
            />
            <textarea
              name="massage"
              id=""
              style={textAreaStyle}
              placeholder="pesan mu"
              value={isMsg}
              onChange={(e) => setIsMsg(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMenu;

let inputStyle = {
  width: "80%",
  border: "none",
  borderBottom: "2px solid white",
  outline: "none",
  padding: "7px 10px",
  color: "#fff",
  fonsSize: "18px",
  background: "none",
};

let textAreaStyle = {
  width: "80%",
  resize: "none",
  border: "none",
  outline: "none",
  background: "none",
  border: "1px solid white",
  padding: "7px 10px",
  borderRadius: "10px",
  height: "80px",
};
