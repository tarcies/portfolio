import styles from "./CodeBlock.module.css";
import hljs from "highlight.js/lib/common";
import { useMemo } from "react";

interface Props {
  code: string;
  language?: string;
  fileName?: string;
}

export function CodeBlock({ code, language, fileName }: Props) {
  const html = useMemo(() => {
    return language && hljs.getLanguage(language)
      ? hljs.highlight(code, { language }).value
      : hljs.highlightAuto(code).value;
  }, [code, language]);

  return (
    <figure>
      {fileName && (
        <figcaption className={`${styles["code-file-name"]} label`}>
          {fileName}
        </figcaption>
      )}
      <pre>
        <code
          className={`${styles.code} hljs${language ? ` language-${language}` : ""}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </figure>
  );
}
