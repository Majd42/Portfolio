import React from "react";
import Title from "./Title";

const contactInfo = [
  { label: "Address", value: "Dubai, UAE" },
  { label: "Phone", value: "+971 55 205 0271" },
  { label: "Email", value: "majd4.sh@gmail.com" },
];

const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (
  //   e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission logic here (e.g., send to an API)
  //   console.log("Form submitted:", formData);
  //   // Reset form fields
  //   setFormData({ name: "", email: "", message: "" });
  // };

  return (
    <section id="contact" className="bg-background min-h-[50vh]">
      <Title text="Get in Touch" />

      <div className="p-4">
        <p className="text-sm text-disabled">
          I&apos;d love to hear from you! If you have new ideas or projects
          you&apos;d like to discuss, feel free to reach out. Whether you have a
          question, need advice, or just want to chat, I&apos;m here to help.
          Let&apos;s bring your vision to life together!
        </p>

        <div className="flex flex-col gap-3 my-10">
          {contactInfo.map((info, index) => (
            <div key={index} className="flex gap-3">
              <p className="text-white text-md">{info.label} . . . . </p>
              <p className="text-disabled text-md">{info.value}</p>
            </div>
          ))}
        </div>

        <form
          action="https://formsubmit.co/majd4.sh@gmail.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            // value={formData.name}
            // onChange={handleChange}
            className="p-2 rounded-md border bg-background border-gray-300"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            // value={formData.email}
            // onChange={handleChange}
            className="p-2 rounded-md bg-background border border-gray-300"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            // value={formData.message}
            // onChange={handleChange}
            className="p-2 rounded-md bg-background border border-gray-300"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded-md hover:bg-secondary transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
