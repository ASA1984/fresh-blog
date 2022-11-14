import { IS_BROWSER } from "$fresh/runtime.ts";
import { useEffect, useState } from "preact/hooks";
import IconSun from "tabler-icons-tsx/sun.tsx";
import IconMoon from "tabler-icons-tsx/moon.tsx";

const useTheme = () => {
  const initialState = (() => {
    if (!IS_BROWSER) return false;
    if (!("theme" in window.sessionStorage)) {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return window.sessionStorage.getItem("theme") === "dark";
  })();
  const [isDark, setIsDark] = useState<boolean>(initialState);
  const toggle = () => {
    setIsDark((state) => !state);
  };

  useEffect(() => {
    const documentClassList = document.documentElement.classList;
    const iframes = Array.from(document.getElementsByTagName("iframe"));
    const storage = window.sessionStorage;
    if (isDark) {
      // document.documentElement.classList.add("dark");
      // window.sessionStorage.setItem("theme", "dark");
      documentClassList.add("dark");
      iframes.map((iframe) =>
        iframe.contentWindow?.document.documentElement.classList.add("dark")
      );
      storage.setItem("theme", "dark");
    } else {
      // document.documentElement.classList.remove("dark");
      // window.sessionStorage.setItem("theme", "light");
      documentClassList.remove("dark");
      iframes.map((iframe) =>
        iframe.contentWindow?.document.documentElement.classList.remove("dark")
      );
      storage.setItem("theme", "light");
    }
    // iframes.map((iframe) => {
    //   iframe.contentWindow?.document.location.reload();
    // });
  }, [isDark]);
  return { isDark, toggle };
};

export default function ThemeToggleButton(props: { className?: string }) {
  const { isDark, toggle } = useTheme();
  return (
    <div
      className={`delay-[50ms] ${IS_BROWSER ? "visible" : "invisible"}`}
    >
      <button
        onClick={toggle}
        className={`m-auto p-1.5 rounded-md transition 
        ${
          isDark
            ? "bg-purple-500 hover:bg-purple-600"
            : "bg-red-400 hover:bg-red-500"
        }
        ${props.className}`}
      >
        {isDark ? <IconMoon /> : <IconSun />}
      </button>
    </div>
  );
}
