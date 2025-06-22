"use client";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

const Post = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
      image: "",
    },
    mode: "onBlur", // Validate on blur
    reValidateMode: "onChange", // Re-validate on change
  });

  return (
    <>
      <h1>what would you like to post?</h1>

      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label className="flex flex-col gap-2">
          <span>Title</span>
          <input
            type="text"
            // name="title"
            placeholder="Enter title"
            className="border p-2 rounded"
            required
            {...register("title", { required: "Title is required" })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span>Content</span>
          <textarea
            // name="content"
            placeholder="Enter content"
            className="border p-2 rounded"
            required
            {...register("content", { required: "Content is required" })}
          ></textarea>
        </label>
        <label className="flex flex-col gap-2">
          <span>Image</span>
          <input
            type="file"
            accept="image/*"
            {...register("image", { required: "Image is required" })}
          />
        </label>
        <ErrorMessage name={`content`} errors={errors} />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Post
        </button>
      </form>
    </>
  );
};

export default Post;
