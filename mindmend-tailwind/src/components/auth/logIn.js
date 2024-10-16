"use client";

import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Label,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import { BiLogoGoogle, BiSolidStar } from "react-icons/bi";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

export const Login5 = (props) => {
  const {
    logo,
    title,
    description,
    logInButton,
    logInWithGoogleButton,
    forgotPassword,
    signUpText,
    signUpLink,
    testimonials,
    footerText,
  } = {
    ...Login5Defaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section>
      <div className="relative grid min-h-screen grid-cols-1 items-stretch justify-center overflow-auto lg:grid-cols-2">
        <div className="absolute bottom-auto left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-start px-[5%] md:h-18 lg:justify-between">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="relative mx-[5vw] flex items-center justify-center pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="mx-auto mb-6 w-full max-w-lg text-center md:mb-8">
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit}>
              <div className="grid w-full items-center">
                <Label htmlFor="email" className="mb-2">
                  Email*
                </Label>
                <Input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="grid w-full items-center">
                <div className="flex items-start justify-between">
                  <Label htmlFor="password" className="mb-2">
                    Password*
                  </Label>
                  <a href={forgotPassword.url} className="underline">
                    {forgotPassword.text}
                  </a>
                </div>
                <Input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="grid-col-1 grid gap-4">
                <Button
                  variant={logInButton.variant}
                  size={logInButton.size}
                  iconLeft={logInButton.iconLeft}
                  iconRight={logInButton.iconRight}
                >
                  {logInButton.title}
                </Button>
                <Button
                  variant={logInWithGoogleButton.variant}
                  size={logInWithGoogleButton.size}
                  iconLeft={logInWithGoogleButton.iconLeft}
                  iconRight={logInWithGoogleButton.iconRight}
                  className="gap-x-3"
                >
                  {logInWithGoogleButton.title}
                </Button>
              </div>
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>{signUpText}</p>
              <a href={signUpLink.url} className="underline">
                {signUpLink.text}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-background-secondary px-[5vw] pb-20 pt-16 md:py-20">
          {/* Carousel part */}
        </div>
      </div>
      <footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-start pl-[5%] md:h-18">
        <p className="text-sm">{footerText}</p>
      </footer>
    </section>
  );
};

export const Login5Defaults = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "Logo text",
  },
  title: "Log in",
  description: "Lorem ipsum dolor sit amet adipiscing elit.",
  logInButton: {
    title: "Log in",
  },
  logInWithGoogleButton: {
    variant: "secondary",
    title: "Log in with Google",
    iconLeft: <BiLogoGoogle className="size-6" />,
  },
  forgotPassword: {
    text: "Forgot your password?",
    url: "#",
  },
  signUpText: "Don't have an account?",
  signUpLink: {
    text: "Sign up",
    url: "#",
  },
  footerText: "© 2024 MindMend",
};
