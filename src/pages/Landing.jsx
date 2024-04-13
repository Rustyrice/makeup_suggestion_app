import React from "react";

// import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  Input,
} from "@material-tailwind/react";

const Landing = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40">
        <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Introducing
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl/none">
              Gaze: The Future of Hiring
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Unlock the power of visual insights. Gaze is the platform that
              provides deep analytics into how recruiters and hiring managers
              interact with resumes using advanced eye-tracking technology.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[400px] space-y-4">
            <form className="grid gap-4">
              <Input placeholder="Enter your email" required type="email" />
              <button type="submit">Sign Up for Early Access</button>
            </form>
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <p className="underline underline-offset-2" href="#">
                Terms & Conditions
              </p>
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              How it Works
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Gaze uses advanced eye-tracking technology to provide deep
              insights into user engagement with resumes. Here’s how it works in
              3 simple steps.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Step 1</CardTitle>
                <CardDescription>
                  User uploads a resume to the Gaze platform.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <img
                  alt=""
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="281"
                  src="/placeholder.svg"
                  width="500"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Step 2</CardTitle>
                <CardDescription>
                  Gaze analyzes user engagement using advanced eye-tracking
                  technology.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <img
                  alt=""
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="281"
                  src="/placeholder.svg"
                  width="500"
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-0">
                <CardTitle>Step 3</CardTitle>
                <CardDescription>
                  Recruiters receive a detailed report with insights into user
                  engagement.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <img
                  alt=""
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="281"
                  src="/placeholder.svg"
                  width="500"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              See the Demo
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Experience the power of Gaze with our interactive demo. Click on
              the video to see the eye-tracking heatmap in action.
            </p>
          </div>
          <div className="mx-auto w-full max-w-[600px] space-y-4">
            <div className="relative rounded-xl overflow-hidden aspect-video">
              <img
                alt="Video"
                className="absolute inset-0 object-cover object-center"
                height="720"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "1280/720",
                  objectFit: "cover",
                }}
                width="1280"
              />
              <button
                className="absolute inset-0 flex items-center justify-center w-full"
                variant="overlay"
              >
                <PlayIcon className="h-12 w-12" />
                <span className="sr-only">Play the video</span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by the Best
            </h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We help teams of all sizes. Trusted by the best companies in the
              world.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input placeholder="Enter your email" required type="email" />
              <button type="submit">Sign Up</button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Sign up to get notified when we launch.
              <Link className="underline underline-offset-2" href="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

function PlayIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

export default Landing;
