"use client";

import Image from "next/image";
import { useState } from "react";
import user from "@/assets/user.svg";
import mail from "@/assets/mail.svg";
import phone from "@/assets/phone-call.svg";
import position from "@/assets/position.svg";
import description from "@/assets/Description.svg";
import download from "@/assets/Download.svg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center border border-1">
        <div className="border-1 border-gray-300 p-5 rounded-lg bg-gray-50 w-[95%] lg:w-[50%]">
          <h1 className="text-2xl font-semibold mb-5 text-center">
            Add Your Details
          </h1>
          <div className="space-y-4">
            <div className="rounded-xl bg-white shadow-md py-1 flex items-center">
              <div className="px-5">
                <Image src={user} width={25} alt="User" />
              </div>
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
            <button className="py-1 px-3 bg-green-700 text-white font-bold text-lg w-full rounded-md cursor-pointer">
              View PDF
            </button>
            <button className="py-1 px-3 bg-green-700 text-white font-bold text-lg w-full rounded-md cursor-pointer flex justify-center items-center">
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
      </div>
    </>
  );
}
