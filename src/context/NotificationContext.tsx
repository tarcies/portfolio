import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import {
  CircleCheck,
  CircleAlert,
  CircleX,
  CircleQuestionMark,
  type LucideIcon,
} from "lucide-react";

const STATUS = {
  success: { color: "--success", Icon: CircleCheck },
  warn: { color: "--warning", Icon: CircleAlert },
  warning: { color: "--warning", Icon: CircleAlert },
  error: { color: "--danger", Icon: CircleX },
  danger: { color: "--danger", Icon: CircleX },
  info: { color: "--info", Icon: CircleQuestionMark },
  information: { color: "--info", Icon: CircleQuestionMark },
} satisfies Record<string, { color: string; Icon: LucideIcon }>;

export type Status = keyof typeof STATUS;
type Toast = { id: number; status: Status; text: string };
type Notify = (status: Status, text: string) => void;

const NotificationContext = createContext<Notify | null>(null);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);

  const notify = useCallback<Notify>((status, text) => {
    setToasts((t) => [...t, { id: nextId.current++, status, text }]);
  }, []);

  const remove = (id: number) => setToasts((t) => t.filter((x) => x.id !== id));

  return (
    <NotificationContext.Provider value={notify}>
      {children}
      {toasts.map(({ id, status, text }) => {
        const { color, Icon } = STATUS[status];
        return (
          <div
            key={id}
            role="status"
            className="notification card h2"
            style={{ color: `var(${color})` }}
            onAnimationEnd={() => remove(id)}
          >
            <Icon />
            {text}
          </div>
        );
      })}
    </NotificationContext.Provider>
  );
}

export function useNotify() {
  const notify = useContext(NotificationContext);
  if (!notify)
    throw new Error("useNotify must be used inside <NotificationProvider>");
  return notify;
}
