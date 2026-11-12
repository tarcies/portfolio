import { useEffect, useState } from "react";

export function useActiveSection(ids: readonly string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // Bottom of page -> last link active
    const sentinel = document.createElement("div");
    sentinel.style.height = "1px";
    document.body.appendChild(sentinel);

    const bottomObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActiveId(ids[ids.length - 1]);
    });
    bottomObserver.observe(sentinel);

    return () => {
      sectionObserver.disconnect();
      bottomObserver.disconnect();
      sentinel.remove();
    };
  }, [ids]);

  return activeId;
}
