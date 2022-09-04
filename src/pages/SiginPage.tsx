import Button from "../components/Button/Button";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/Firebase/firebase.utils";

const SignInPage = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    createUserDocumentFromAuth(response.user);
  };

  return (
    <>
      <div className="sm:flex sm:flex-row  justify-center p-5 md:p-20 ">
        <div className="flex-col flex  self-center lg:p-10 sm:max-w-5xl xl:max-w-lg  z-10">
          <div className="self-start hidden lg:flex flex-col">
            <h1 className="my-3 font-semibold text-4xl">
              Welcome back to Audiophile
            </h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups
            </p>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 border mx-auto rounded-3xl w-96 shadow-lg ">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-700">Sign In </h3>
              <p className="text-gray-500">
                Don'thave an account?{" "}
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-gray-500"
                >
                  Sign Up
                </a>
              </p>
            </div>
            <div className="space-y-6">
              <div className="">
                <input
                  className=" w-full text-sm  px-4 py-3 border  border-gray-700 rounded-lg focus:outline-none focus:border-purple-400"
                  type=""
                  placeholder="Email"
                />
              </div>

              <div className="relative" x-data="{ show: true }">
                <input
                  placeholder="Password"
                  type="show ? 'password' : 'text'"
                  className="text-sm text-gray-200 px-4 py-3 rounded-lg w-full border border-gray-700 focus:outline-none focus:border-purple-400"
                />
                <div className="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5"></div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a
                    href="#"
                    className="text-sm text-gray-600 hover:text-gray-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Button kind="raised" type="submit">
                  Sign in
                </Button>
              </div>
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-300"></span>
                <span className="text-gray-300 font-normal">OR</span>
                <span className="h-px w-16 bg-gray-300"></span>
              </div>
              <div className="flex justify-center gap-5 w-full ">
                <Button kind="outline" type="submit" onClick={logGoogleUser}>
                  <svg
                    className="w-4 mr-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#EA4335"
                      d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                    />
                    <path
                      fill="#34A853"
                      d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                    />
                  </svg>

                  <span>Google</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignInPage;
