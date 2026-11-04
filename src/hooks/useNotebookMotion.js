import { useEffect, useState } from "react";

export function useNotebookMotion() {
  const [activeChapter, setActiveChapter] = useState("");

  useEffect(() => {
    const sheets = [...document.querySelectorAll(".reveal")];
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let sheetObserver;

    function setupMotion() {
      sheetObserver?.disconnect();
      if (motionPreference.matches || !("IntersectionObserver" in window)) {
        sheets.forEach((sheet) => sheet.removeAttribute("data-reveal"));
        return;
      }

      sheetObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(({ target, isIntersecting }) => {
            if (!isIntersecting) return;
            target.dataset.reveal = "visible";
            sheetObserver.unobserve(target);
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -24px 0px" },
      );

      sheets.forEach((sheet) => {
        if (sheet.dataset.reveal === "visible") return;
        sheet.dataset.reveal = "waiting";
        sheetObserver.observe(sheet);
      });
    }

    // Keyboard navigation must reveal a sheet immediately, even before scrolling.
    function revealFocusedSheet(event) {
      const sheet = event.target.closest(".reveal");
      if (sheet) {
        sheet.dataset.reveal = "visible";
        sheetObserver?.unobserve(sheet);
      }
    }

    setupMotion();
    motionPreference.addEventListener("change", setupMotion);
    document.addEventListener("focusin", revealFocusedSheet);

    const chapterObserver =
      "IntersectionObserver" in window
        ? new IntersectionObserver(
            (entries) => {
              entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting)
                  setActiveChapter(target.id === "top" ? "" : target.id);
              });
            },
            { rootMargin: "-10% 0px -65% 0px", threshold: 0 },
          )
        : null;
    document
      .querySelectorAll("#top, #work, #about, #lab, #contact")
      .forEach((chapter) => chapterObserver?.observe(chapter));

    return () => {
      sheetObserver?.disconnect();
      chapterObserver?.disconnect();
      motionPreference.removeEventListener("change", setupMotion);
      document.removeEventListener("focusin", revealFocusedSheet);
      sheets.forEach((sheet) => sheet.removeAttribute("data-reveal"));
    };
  }, []);

  return activeChapter;
}
