"use client"; // if using App Router

import { prefix, api } from "@/utils/prefix";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type ContactFormInputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactForm({
  executeRecaptcha,
}: {
  executeRecaptcha: (action: string) => Promise<string>;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    if (!executeRecaptcha) {
      toast.error("Recaptcha not ready. Please try again later.", {
        duration: 5000,
        position: "bottom-center",
      });
      return;
    }
    try {
      const token = await executeRecaptcha("contact_form");
      const url = !!api ? `${api}/api/contact` : "/api/contact";
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, token }),
      });

      if (res.ok) {
        toast.success("Message sent successfully!", {
          duration: 5000,
          position: "bottom-center",
        });
        reset();
      } else {
        toast.error("Failed to send message.", {
          duration: 5000,
          position: "bottom-center",
        });
        const errorData = await res.json();
        console.error("Error response:", errorData);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      // Show error toast
      toast.error("Something went wrong.", {
        duration: 5000,
        position: "bottom-center",
      });
    }

    reset(); // clear form after submit
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto p-4"
    >
      <div>
        <label className="block">Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className="w-full border p-2 rounded"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label className="block">Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Invalid email address",
            },
          })}
          className="w-full border p-2 rounded"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block">Message</label>
        <textarea
          {...register("message", { required: "Message is required" })}
          className="w-full border p-2 rounded"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500 text-sm">{errors.message.message}</p>
        )}
      </div>

      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
