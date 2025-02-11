"use client";
import { ChatWithSuggestions } from "@/components/chatbox";

export default function Home() {
  return (
    <main className=" flex mx-auto min-h-screen flex-col items-center justify-center ">
      <style jsx>{`
        .journal-page {
          background-image: radial-gradient(
              circle,
              #d1d1d1 1px,
              transparent 1px
            ),
            linear-gradient(#f5f5f5 1px, transparent 1px);
          background-size: 15px 15px, 100% 2em;
          background-color: #fafafa;
          box-shadow: rgba(0, 0, 0, 0) 0px 4px 4px;
          border-radius: 2px;
          border-left: 1px solid #eaeaea;
          position: relative;
          padding: 2rem;
        }

        .journal-page::before {
          content: "";
          position: absolute;
          left: 1.35rem;
          top: 0;
          height: 100%;
          width: 1px;
          background-color: #e0e0e0;
        }

        .journal-page::after {
          content: "和";
          position: absolute;
          top: 1rem;
          right: 1rem;
          font-family: serif;
          font-size: 1.5rem;
          color: #9e9e9e;
          opacity: 1;
        }

        .zen-mark {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          width: 2rem;
          height: 2rem;
          border: 1px solid #e0e0e0;
          border-radius: 50%;
          opacity: 0.2;
        }
      `}</style>
      <div className="h-7/10 p-2 max-w-2xl journal-page">
        <ChatWithSuggestions />
      </div>
      <div className="max-w-2xl mx-auto pt-24 text-sm text-gray-500">
        enluminari journaling prompter - by paulie; <br />
        still working on the model to be better for sole journalling purposes.
        in the meantime, enjoy 🌼
      </div>
    </main>
  );
}
