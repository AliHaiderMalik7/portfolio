import {useEffect} from "react";

// Adds `.is-in` to every [data-reveal] element the first time it scrolls into view.
// A MutationObserver also picks up elements rendered later (lazy content, hot reload),
// so nothing can get stuck invisible.
export default function useReveal() {
  useEffect(() => {
    const reveal = el => el.classList.add("is-in");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(reveal);
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            reveal(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      {rootMargin: "0px 0px -6% 0px", threshold: 0.05}
    );

    const watch = root => {
      if (root.matches && root.matches("[data-reveal]:not(.is-in)")) io.observe(root);
      root.querySelectorAll &&
        root.querySelectorAll("[data-reveal]:not(.is-in)").forEach(el => io.observe(el));
    };
    watch(document.body);

    const mo = new MutationObserver(muts =>
      muts.forEach(m => m.addedNodes.forEach(n => n.nodeType === 1 && watch(n)))
    );
    mo.observe(document.body, {childList: true, subtree: true});

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
