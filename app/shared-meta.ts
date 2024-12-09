export const sharedMetadata = {
  title: "Percentage Calculator",
  name: "Percentage Calculator",
  description:
    "Quickly split totals among participants with this simple, user-friendly calculator. Perfect for managing group expenses!",
  og: "Quickly split totals among participants.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://percentage-calcc.vercel.app",
  ogImage: {
    width: 1200,
    height: 630,
    type: "image/png",
  },
  image: "./og.png",
};

export const SOCIALS = {
  twitter: {
    title: "X (Twitter)",
    username: "drealdumore",
    url: "https://twitter.com/drealdumore",
  },
  github: {
    title: "GitHub",
    url: "https://github.com/drealdumore",
  },
  linkedin: {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/samuel-isah",
  },
};
