import { useState } from "react";

function ContactForm() {
  // Initial form state
  const initialFormData = {
    fullName: "",
    email: "",
    telegramHandle: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);

    setFormData(initialFormData);
  };

  return (
    <div className="max-w-4xl md:mx-auto my-12 p-8 mx-3 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center text-custom-left">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md outline-none focus:border-custom-left"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md outline-none focus:border-custom-left"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="telegramHandle"
          >
            Telegram Handle
          </label>
          <input
            type="text"
            id="telegramHandle"
            name="telegramHandle"
            value={formData.telegramHandle}
            onChange={handleChange}
            className="w-full p-3 border rounded-md outline-none focus:border-custom-left"
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-md outline-none focus:border-custom-left h-32 resize-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-custom-left text-white font-bold rounded-md hover:bg-custom-right transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
