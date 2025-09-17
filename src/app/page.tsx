"use client";

import jsPDF from "jspdf";

import Image from "next/image";
import { useState } from "react";
import user from "@/assets/user.svg";
import mail from "@/assets/mail.svg";
import phone from "@/assets/phone-call.svg";
import position from "@/assets/position.svg";
import description from "@/assets/Description.svg";
import download from "@/assets/Download.svg";
import back from "@/assets/chevron-left.svg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    description: "",
  });

  const [viewPDF, setViewPDF] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const viewPDFButton = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.name == "") {
      alert("Name cannot be empty!");
      return;
    }
    if (formData.email == "") {
      alert("Email cannot be empty!");
      return;
    }
    if (formData.phone == "") {
      alert("Phone cannot be empty!");
      return;
    }
    if (formData.email != "" && !emailRegex.test(formData.email)) {
      alert("Email is Invalid");
      return;
    }
    if (formData.phone != "" && formData.phone.length < 10) {
      alert("Phone Number cannot be less than 10 digits");
      return;
    }
    setViewPDF(true);
  };

  const downloadPDF = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (formData.name == "") {
      alert("Name cannot be empty!");
      return;
    }
    if (formData.email == "") {
      alert("Email cannot be empty!");
      return;
    }
    if (formData.phone == "") {
      alert("Phone cannot be empty!");
      return;
    }
    if (formData.email != "" && !emailRegex.test(formData.email)) {
      alert("Email is Invalid");
      return;
    }
    if (formData.phone != "" && formData.phone.length < 10) {
      alert("Phone Number cannot be less than 10 digits");
      return;
    }

    const doc = new jsPDF();

    doc.text(`Name: ${formData.name}`, 10, 10);
    doc.text(`Email: ${formData.email}`, 10, 20);
    doc.text(`Phone: ${formData.phone}`, 10, 30);
    doc.text(`Position: ${formData.position}`, 10, 40);

    const descriptionText = doc.splitTextToSize(
      `Description: ${formData.description}`,
      180
    );
    doc.text(descriptionText, 10, 50);

    doc.save("resumemate.pdf");
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center border border-1">
        {viewPDF ? (
          <>
            <div className="border-1 border-gray-300 p-5 rounded-lg bg-gray-100 w-[95%] lg:w-[60%]">
              {/* form */}
              <div className="mx-10 cursor-pointer">
                <Image
                  onClick={() => setViewPDF(false)}
                  src={back}
                  width={30}
                  alt="Back"
                ></Image>
              </div>

              {/* user's name */}
              <div className="w-[95%] lg:w-[50%] flex-1 space-y-5 border-black border-1 m-auto mt-2 bg-white p-5 shadow-md">
                <div className="flex gap-2">
                  <p className="font-bold">Name:</p>
                  <p className="text-gray-600">{formData.name}</p>
                </div>

                {/* user's email */}
                <div className="flex gap-2">
                  <p className="font-bold">Email:</p>
                  <p className="text-gray-600">{formData.email}</p>
                </div>

                {/* user's phone */}
                <div className="flex gap-2">
                  <p className="font-bold">Phone:</p>
                  <p className="text-gray-600">{formData.phone}</p>
                </div>

                {/* user's position */}
                <div className="flex gap-2">
                  <p className="font-bold">Position:</p>
                  <p className="text-gray-600">{formData.position}</p>
                </div>

                {/* user's description */}
                <div className="flex-1 gap-2">
                  <p className="font-bold">Description:</p>
                  <p className="text-gray-600 wrap-break-word max-w-full">
                    {formData.description}
                  </p>
                </div>
              </div>

              {/* download pdf button */}
              <div className="w-[95%] lg:w-[50%] flex-1 space-y-5 m-auto mt-2 shadow-md">
                <button
                  onClick={downloadPDF}
                  className="py-1 px-3 bg-green-700 text-white font-bold text-lg w-full rounded-md cursor-pointer flex justify-center items-center"
                >
                  <Image
                    className="mr-5"
                    src={download}
                    width={30}
                    alt="Download PDF"
                  ></Image>
                  Download PDF
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="border-1 border-gray-300 p-5 rounded-lg bg-gray-50 w-[95%] lg:w-[50%]">
              <h1 className="text-2xl font-semibold mb-5 text-center">
                Add Your Details
              </h1>
              <div className="space-y-4">
                <div className="rounded-xl bg-white shadow-md py-1 flex items-center">
                  <div className="px-5">
                    <Image src={user} width={25} alt="User" />
                  </div>

                  {/* user's name label and input */}
                  <div className="flex-1">
                    <label htmlFor="name" className="font-semibold">
                      Name
                    </label>
                    <br />
                    <input
                      name="name"
                      type="text"
                      placeholder="e.g. John Doe"
                      className="focus:outline-none w-[95%]"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* user's email label and input */}

                <div className="rounded-xl bg-white shadow-md py-1 flex items-center">
                  <div className="px-5">
                    <Image src={mail} width={25} alt="Mail" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="font-semibold">
                      Email
                    </label>
                    <br />
                    <input
                      name="email"
                      type="email"
                      placeholder="e.g. Johndoe@gmail.com"
                      className="focus:outline-none w-[95%]"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* user's phone label and input */}

                <div className="rounded-xl bg-white shadow-md py-1 flex items-center">
                  <div className="px-5">
                    <Image src={phone} width={25} alt="Phone" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="font-semibold">
                      Phone Number
                    </label>
                    <br />
                    <input
                      name="phone"
                      type="text"
                      placeholder="e.g. (220) 222-20002"
                      className="focus:outline-none w-[95%]"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* user's position label and input */}

                <div className="rounded-xl bg-white shadow-md py-1 flex items-center">
                  <div className="px-5">
                    <Image src={position} width={25} alt="Position" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="position" className="font-semibold">
                      Position
                    </label>
                    <br />
                    <input
                      name="position"
                      type="text"
                      placeholder="e.g. Junior Front end Developer"
                      className="focus:outline-none w-[95%]"
                      value={formData.position}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* user's description label and input */}

                <div className="rounded-xl bg-white shadow-md py-1 flex items-center">
                  <div className="px-5">
                    <Image src={description} width={25} alt="Description" />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="description" className="font-semibold">
                      Description
                    </label>
                    <br />
                    <textarea
                      name="description"
                      placeholder="e.g. Work experiences"
                      className="focus:outline-none w-[95%]"
                      value={formData.description}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="flex mt-5 gap-4">
                {/* view pdf button */}

                <button
                  onClick={viewPDFButton}
                  className="py-1 px-3 bg-green-700 text-white font-bold text-lg w-full rounded-md cursor-pointer"
                >
                  View PDF
                </button>

                {/* download pdf button */}

                <button
                  onClick={downloadPDF}
                  className="py-1 px-3 bg-green-700 text-white font-bold text-lg w-full rounded-md cursor-pointer flex justify-center items-center"
                >
                  <Image
                    className="mr-5"
                    src={download}
                    width={30}
                    alt="Download PDF"
                  ></Image>
                  Download PDF
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
