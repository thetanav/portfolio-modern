"use client";

import { Share1Icon } from "@radix-ui/react-icons";

export const Share = () => {
  return (
    <div className="mr-3">
      <button
        onClick={async () => {
          if (navigator.share) {
            try {
              await navigator.share({
                title: document.title,
                text: "Check out this page!",
                url: window.location.href,
              });
            } catch (err) {
              console.log("Sharing cancelled", err);
            }
          } else {
            alert(
              "Your browser doesn’t support Web Share API. Copy link: " +
                window.location.href,
            );
          }
        }}
        className="text-200/60 hover:text-100"
      >
        <Share1Icon className="w-5 h-5 cursor-pointer" />
      </button>
    </div>
  );
};
