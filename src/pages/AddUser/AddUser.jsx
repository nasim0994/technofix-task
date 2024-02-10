import { useState } from "react";
import ImageUploading from "react-images-uploading";
import { AiFillDelete } from "react-icons/ai";

export default function AddUser() {
  const [images, setImages] = useState([]);
  return (
    <section>
      <div className="container">
        <h2 className="text-center border-b pb-4">Add New User</h2>

        <form className="mt-4 w-1/2 mx-auto flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-neutral/70">Avater</p>
            <ImageUploading
              value={images}
              onChange={(img) => setImages(img)}
              dataURLKey="data_url"
            >
              {({ onImageUpload, onImageRemove, dragProps }) => (
                <div
                  className="border rounded border-dashed p-4 w-max sm:flex gap-6"
                  {...dragProps}
                >
                  <div className="flex items-center gap-2">
                    <span
                      onClick={onImageUpload}
                      className="px-4 py-1.5 rounded-2xl text-base-100 bg-primary cursor-pointer text-sm"
                    >
                      Choose Image
                    </span>

                    <p className="text-neutral-content">or Drop here</p>
                  </div>

                  <div className={`${images?.length > 0 && "mt-4"} `}>
                    {images?.map((img, index) => (
                      <div key={index} className="image-item relative">
                        <img src={img["data_url"]} alt="" className="w-24" />
                        <div
                          onClick={() => onImageRemove(index)}
                          className="w-7 h-7 bg-primary rounded-full flex justify-center items-center text-base-100 absolute top-0 right-0 cursor-pointer"
                        >
                          <AiFillDelete />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          </div>

          {/* Name */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-neutral/70">First Name</p>
              <input type="text" name="firstName" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral/70">Last Name</p>
              <input type="text" name="lastName" />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <p className="text-neutral/70">Email</p>
            <input type="email" name="email" />
          </div>

          {/* Address */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-neutral/70">City</p>
              <input type="text" name="city" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-neutral/70">State</p>
              <input type="text" name="state" />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-neutral/70">Suite</p>
            <textarea name="suite" rows="3"></textarea>
          </div>

          {/* Company */}
          <div className="flex flex-col gap-2">
            <p className="text-neutral/70">Company Name</p>
            <input type="text" name="company" />
          </div>

          <div>
            <button className="w-full border border-primary text-primary hover:bg-primary hover:text-base-100 py-2 rounded-lg duration-300">
              Add User
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
