import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import { BiLogoApple, BiLogoFacebook, BiLogoGoogle, BiSolidStar } from "react-icons/bi";
import Autoplay from "embla-carousel-autoplay";
import clsx from "clsx";

const plugins = [
  Autoplay({
    delay: 5000,
  }),
];

const Signup = (props) => {
  const {
    logo,
    logInText,
    logInLink,
    title,
    description,
    inputPlaceholderEmail,
    inputPlaceholderPassword,
    signUpButton,
    socialLoginButtons,
    testimonials,
    footerText,
  } = {
    ...SignupDefaults,
    ...props,
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email, password });
  };

  return (
    <section>
      <div className="relative grid min-h-screen grid-cols-1 items-stretch justify-center overflow-auto lg:grid-cols-2">
        <div className="absolute bottom-auto left-0 right-0 top-0 z-10 flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-start">
          <a href={logo.url}>
            <img src={logo.src} alt={logo.alt} />
          </a>
        </div>
        <div className="relative mx-[5vw] flex items-center justify-center pb-16 pt-20 md:pb-20 md:pt-24 lg:py-20">
          <div className="mx-auto w-full max-w-sm">
            <div className="mx-auto mb-8 w-full max-w-lg text-center md:mb-10 lg:mb-12">
              <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{title}</h1>
              <p className="md:text-md">{description}</p>
            </div>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <Input
                type="email"
                id="email"
                placeholder={inputPlaceholderEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                id="password"
                placeholder={inputPlaceholderPassword}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant={signUpButton.variant}
                size={signUpButton.size}
                iconLeft={signUpButton.iconLeft}
                iconRight={signUpButton.iconRight}
              >
                {signUpButton.title}
              </Button>
              <div className="my-3 h-px w-full bg-black md:my-4" />
              {socialLoginButtons.map((button, index) => (
                <Button
                  key={index}
                  {...button}
                  iconLeft={button.iconLeft}
                  iconRight={button.iconRight}
                  className="gap-x-3"
                >
                  {button.title}
                </Button>
              ))}
            </form>
            <div className="mt-5 inline-flex w-full items-center justify-center gap-x-1 text-center md:mt-6">
              <p>{logInText}</p>
              <a href={logInLink.url} className="underline">
                {logInLink.text}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center bg-background-secondary px-[5vw] pb-20 pt-16 md:py-20">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={plugins}
            className="overflow-hidden"
          >
            <div className="relative">
              <CarouselContent className="pb-7">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="max-w-full">
                    <div className="mx-auto flex h-full max-w-lg flex-col items-center justify-center text-center">
                      <div className="flex">
                        {Array(testimonial.numberOfStars)
                          .fill(null)
                          .map((_, starIndex) => (
                            <BiSolidStar key={starIndex} className="size-6" />
                          ))}
                      </div>
                      <blockquote className="my-6 text-xl font-bold md:my-8 md:text-2xl">
                        {testimonial.quote}
                      </blockquote>
                      <div className="flex w-full flex-col items-center text-center md:w-auto md:flex-row md:text-left">
                        <div className="rb-4 mb-4 md:mb-0 md:mr-5">
                          <img
                            src={testimonial.avatar.src}
                            alt={testimonial.avatar.alt}
                            className="h-14 min-h-14 w-14 min-w-14 rounded-full object-cover"
                          />
                        </div>
                        <div className="rb-4 mb-4 md:mb-0">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p>{testimonial.position}</p>
                        </div>
                        <div className="mx-5 hidden w-px self-stretch bg-black md:block" />
                        <div>
                          <img
                            src={testimonial.logo.src}
                            alt={testimonial.logo.alt}
                            className="max-h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex w-full items-center justify-center gap-12">
                <CarouselPrevious
                  className="static hidden -translate-y-0 bg-transparent md:flex"
                  variant="link"
                />
                <div className="flex items-center justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={clsx("mx-[3px] size-2 rounded-full", {
                        "bg-black": current === index + 1,
                        "bg-neutral-darker/40": current !== index + 1,
                      })}
                    />
                  ))}
                </div>
                <CarouselNext
                  className="static hidden -translate-y-0 bg-transparent md:flex "
                  variant="link"
                />
              </div>
            </div>
          </Carousel>
        </div>
        <footer className="absolute bottom-0 left-0 right-0 top-auto flex h-16 w-full items-center justify-center px-[5%] md:h-18 lg:justify-start">
          <p className="text-sm">{footerText}</p>
        </footer>
      </div>
    </section>
  );
};

export const SignupDefaults = {
  logo: {
    url: "#",
    src: "https://d22po4pjz3o32e.cloudfront.net/logo-image.svg",
    alt: "MindMend",
  },
  logInText: "Already have an account?",
  logInLink: {
    text: "Log In",
    url: "#",
  },
  title: "Join MindMend",
  description: "Empower your mental wellness with real-time support from our AI-powered mental health companion. Start tracking your mood and get personalized coping strategies now.",
  inputPlaceholderEmail: "Email",
  inputPlaceholderPassword: "Password",
  signUpButton: {
    title: "Get Started",
  },
  socialLoginButtons: [
    {
      variant: "secondary",
      title: "Sign up with Google",
      iconLeft: <BiLogoGoogle className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Sign up with Facebook",
      iconLeft: <BiLogoFacebook className="size-6" />,
    },
    {
      variant: "secondary",
      title: "Sign up with Apple",
      iconLeft: <BiLogoApple className="size-6" />,
    },
  ],
  testimonials: [
    {
      numberOfStars: 5,
      quote: '"MindMend has been an incredible tool for managing my mental health on a daily basis. The AI suggestions are spot-on, and the mood tracking is so insightful!"',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Jane Doe",
      position: "User, MindMend",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "MindMend logo",
      },
    },
    {
      numberOfStars: 5,
      quote: '"The daily assessments have changed the way I approach my mental well-being. It’s like having a therapist in my pocket!"',
      avatar: {
        src: "https://d22po4pjz3o32e.cloudfront.net/avatar-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "John Smith",
      position: "User, MindMend",
      logo: {
        src: "https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg",
        alt: "MindMend logo",
      },
    },
  ],
  footerText: "© 2024 MindMend",
};
