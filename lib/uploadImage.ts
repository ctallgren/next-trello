import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "654903fe1fa24519d265",
    ID.unique(),
    file
  );

  return fileUploaded;
};

export default uploadImage;
