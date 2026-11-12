import hljs from "highlight.js/lib/common";
import { useMemo } from "react";

type Props = { code: string; language?: string; fileName?: string };

export function CodeBlock({ code, language, fileName }: Props) {
  const html = useMemo(() => {
    return language && hljs.getLanguage(language)
      ? hljs.highlight(code, { language }).value
      : hljs.highlightAuto(code).value;
  }, [code, language]);

  return (
    <div>
      {fileName ? <span className="code-file-name">{fileName}</span> : ""}
      <pre>
        <code
          className={`code hljs${language ? ` language-${language}` : ""}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </pre>
    </div>
  );
}
