"use client"

import React, { useEffect, useState } from "react";
import "../../../src/app/(homepage)/globals.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/admin/login", user);
      console.log("Login Success", response.data);
      toast.success("Loginn Success");
      router.push("/dashboard");
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error(reeor.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.username.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex  bg-[#030C1D] relative">
      <div className="absolute top-[20px] left-[20px] text-[#D7DCEC] ">
        <Image
          className="w-[35px] h-[35px]"
          src="/loadingmainlogo.png"
          width={30}
          height={30}
          alt="logo"
        />
      </div>
      <div className="flex justify-center items-center w-[60%] h-[100vh]">
        <div className="w-[450px]  bg-[#091F3C] rounded-md">
          <form className="p-10">
            <h1 className="text-center text-2xl text-[#2CA58D] font-bold">
              Admin Login
            </h1>
            <p className="text-[#7492C4] text-center">
              Enter your credentials to continue
            </p>

            <div className="flex flex-col mt-5">
              <label
                className="text-[#BDB4DD] mb-2 text-[14px]"
                htmlFor="username"
              >
                Enter UserName
              </label>
              <input
                id="username"
                className="bg-[#051320] text-white p-3 text-[14px] border-[#2f2058] border-[0.5px] rounded-md"
                type="text"
                placeholder="UserName"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
            <div className="flex flex-col mt-5">
              <label
                className="text-[#BDB4DD] mb-2 text-[14px]"
                htmlFor="password"
              >
                Enter Password
              </label>
              <input
                className="bg-[#051320] text-white p-3 text-[14px] border-[#2f2058] border-[0.5px] rounded-md"
                type="password"
                placeholder="Password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex justify-end">
              <Link
                className=" w-fit text-[#2CA58D] text-[14px] capitalize my-4"
                href=""
              >
                {" "}
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <button
                onClick={onLogin}
                className="text-center py-2 w-[100%] rounded-md bg-[#2CA58D] text-[16px] font-medium text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-[40%] opacity-[0.5]">
        <Image
          src="/contact.jpg"
          width={100}
          height={100}
          unoptimized
          alt="contact"
        />
      </div>
    </div>
  );
};

export default Login;
