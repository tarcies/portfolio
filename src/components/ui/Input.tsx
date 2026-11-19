import styles from "./Input.module.css";

type input = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
};

export function Input({ id, label, type = "text", placeholder }: input) {
  return (
    <div className={styles["input-group"]}>
      <label htmlFor={id} className={`label ${styles["input-label"]}`}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.input}
        {...(placeholder && { placeholder: placeholder })}
      />
    </div>
  );
}
