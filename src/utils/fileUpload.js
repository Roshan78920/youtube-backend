import { v2 as fileUpload } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: process_params.env.CLOUDINARY_CLOUD_NAME,
  api_key: process_params.env.CLOUDINARY_API_KEY,
  api_secret: process_params.env.CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on the cloudinary
    const response = await fileUpload.uploader.upload(localFilePath, {
      response_type: "auto",
    });
    //file has uploaded successfully
    console.log("file uploaded successfully", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath) //remove the locally saved temparary file has the opration got failed
    return null;
  }
};

export { uploadOnCloudinary }