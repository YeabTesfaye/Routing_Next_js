"use client";
import { useRouter } from "next/navigation";

const ModalaBackDrop = () => {
  const router = useRouter();
  return <div className="modal-backdrop" onClick={router.back} />;
};

export default ModalaBackDrop;
