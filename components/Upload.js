import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { Cloudinary } from "@cloudinary/url-gen";

function Upload() {
  const [imagesUploadedList, setImagesUploadedList] = useState([]);

  const cld = new Cloudinary({
    cloud: {
      cloud_name: "nfttokenasa", //Your cloud name
      upload_preset: "i7nwrsv6" //Create an unsigned upload preset and update this
    }
  });

  const onImageUploadHandler = (publicId) => {
    setImagesUploadedList((prevState) => [...prevState, publicId]);
  };

  

  return (
    <div className="App">
     
      <ImageUpload
        cloud_name={cld.cloudinaryConfig.cloud.cloud_name}
        upload_preset={cld.cloudinaryConfig.cloud.upload_preset}
        onImageUpload={(publicId) => onImageUploadHandler(publicId)}
      />
      
     
    </div>
  );
}

export default Upload;
