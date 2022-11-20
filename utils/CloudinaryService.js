import { Cloudinary as CoreCloudinary, Util } from "cloudinary-core";

export const url = (publicId, options) => {
  try {
    const scOptions = Util.withSnakeCaseKeys(options);
    const cl = CoreCloudinary.new();
    return cl.url(publicId, scOptions);
  } catch (e) {
    console.error(e);
    return null;
  }
};

export const openUploadWidget = (options, callback) => {
    console.log('options, callback', window.cloudinary)
    return window.cloudinary.createUploadWidget(options, callback);
};
