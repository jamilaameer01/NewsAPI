import React, { useState } from 'react'


const SignIn = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col items-center p-10 gap-y-9">
      <h1 className="text-center text-3xl">Sign in to your account</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[100%] max-w-[500px] gap-y-6"
      >
        <input
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email address"
          value={loginFormData.email}
          className="border-2 h-[60px] shadow-2xl rounded-lg pl-3"
        />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
          value={loginFormData.password}
          className="border-2 h-[60px] shadow-2xl rounded-lg pl-3"
        />
        <button className="bg-blue-900 border-none rounded-sm text-white xs:py-2 cursor-pointer xs:rounded-lg xs:max-w-[6rem]">
          SignIn
        </button>
      </form>
    </div>
  );
}

export default SignIn