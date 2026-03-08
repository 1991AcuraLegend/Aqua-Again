import type {
  ButtonHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes,
  PropsWithChildren,
  ReactNode,
  SelectHTMLAttributes,
} from "react";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

type AquaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "default" | "small";
};

export function AquaButton({
  className,
  variant = "primary",
  size = "default",
  ...props
}: AquaButtonProps) {
  return (
    <button
      className={cx(
        "aqua-button",
        variant === "secondary" && "secondary",
        size === "small" && "small",
        className,
      )}
      {...props}
    />
  );
}

export function AquaBadge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cx("aqua-badge", className)} {...props} />;
}

export function AquaCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <section className={cx("aqua-card", className)} {...props} />;
}

export function AquaWindow({
  title,
  toolbar,
  children,
  className,
}: PropsWithChildren<{
  title: ReactNode;
  toolbar?: ReactNode;
  className?: string;
}>) {
  return (
    <article className={cx("aqua-window", className)}>
      <header className="aqua-titlebar">
        <TrafficLights />
        <div className="aqua-title">{title}</div>
      </header>
      {toolbar ? <div className="aqua-toolbar">{toolbar}</div> : null}
      <div className="aqua-content">{children}</div>
    </article>
  );
}

export function TrafficLights() {
  return (
    <div className="traffic-lights" aria-hidden="true">
      <span className="red" />
      <span className="yellow" />
      <span className="green" />
    </div>
  );
}

export function AquaSegmentedControl({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="aqua-segmented" role="tablist">
      {items.map((item) => (
        <button key={item} className={cx("aqua-segment", item === active && "active")}>
          {item}
        </button>
      ))}
    </div>
  );
}

export function AquaTabs({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="aqua-tabs" role="tablist">
      {items.map((item) => (
        <button key={item} className={cx("aqua-tab", item === active && "active")}>
          {item}
        </button>
      ))}
    </div>
  );
}

export function AquaPillTabs({
  items,
  active,
}: {
  items: string[];
  active: string;
}) {
  return (
    <div className="aqua-pill-tabs" role="tablist">
      {items.map((item) => (
        <button key={item} className={cx("aqua-pill-tab", item === active && "active")}>
          {item}
        </button>
      ))}
    </div>
  );
}

export function AquaCheckbox({
  checked,
  children,
}: PropsWithChildren<{ checked?: boolean }>) {
  return (
    <label className="aqua-checkbox">
      <span className={cx("aqua-checkbox-box", checked && "checked")} aria-hidden="true" />
      <span>{children}</span>
    </label>
  );
}

export function AquaRadio({
  selected,
  children,
}: PropsWithChildren<{ selected?: boolean }>) {
  return (
    <label className="aqua-radio">
      <span className={cx("aqua-radio-dot", selected && "selected")} aria-hidden="true" />
      <span>{children}</span>
    </label>
  );
}

export function AquaCombobox({
  className,
  children,
  ...props
}: PropsWithChildren<SelectHTMLAttributes<HTMLSelectElement> & { className?: string }>) {
  return (
    <div className={cx("aqua-combobox-wrap", className)}>
      <select className="aqua-combobox" {...props}>
        {children}
      </select>
    </div>
  );
}

export function AquaSlider({ value = 58 }: { value?: number }) {
  const clamped = Math.max(0, Math.min(100, value));

  return (
    <div className="aqua-slider" aria-hidden="true">
      <div className="aqua-slider-track" />
      <div className="aqua-slider-fill" style={{ width: `calc(${clamped}% - 2px)` }} />
      <div className="aqua-slider-thumb" style={{ left: `calc(${clamped}% - 16px)` }} />
    </div>
  );
}

export function AquaProgress({ value = 68 }: { value?: number }) {
  return (
    <div className="aqua-meter" aria-label={`Progress ${value}%`}>
      <span style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  );
}

export function AquaIndeterminateProgress() {
  return <div className="aqua-indeterminate" aria-hidden="true" />;
}

export function AquaSpinner({ large = false }: { large?: boolean }) {
  return <div className={cx("aqua-spinner", large && "large")} aria-hidden="true" />;
}

export function AquaSourceList({
  items,
  active,
}: {
  items: Array<{ label: string; count?: number }>;
  active: string;
}) {
  return (
    <div className="aqua-source-list">
      {items.map((item) => (
        <div key={item.label} className={cx("aqua-source-item", item.label === active && "active")}>
          <span className="aqua-inline">
            <span className="aqua-source-dot" />
            <strong>{item.label}</strong>
          </span>
          {item.count != null ? <span>{item.count}</span> : null}
        </div>
      ))}
    </div>
  );
}

export function AquaScrollbar({ thumbHeight = 72 }: { thumbHeight?: number }) {
  return (
    <div className="aqua-scrollbar" aria-hidden="true">
      <div className="aqua-scrollbar-thumb" style={{ height: thumbHeight }} />
    </div>
  );
}

export function AquaSheet({
  title,
  children,
  actions,
}: PropsWithChildren<{ title: ReactNode; actions?: ReactNode }>) {
  return (
    <div className="aqua-sheet">
      <p className="aqua-sheet-title">{title}</p>
      {children}
      {actions ? <div className="aqua-sheet-actions">{actions}</div> : null}
    </div>
  );
}

export function AquaDrawer({ children }: PropsWithChildren) {
  return (
    <div className="aqua-drawer">
      <div className="aqua-drawer-handle" aria-hidden="true" />
      {children}
    </div>
  );
}

export function AquaProgressDialog({
  title,
  status,
}: {
  title: ReactNode;
  status?: ReactNode;
}) {
  return (
    <div className="aqua-progress-dialog">
      <div className="aqua-progress-dialog-header">
        <p className="aqua-progress-dialog-title">{title}</p>
        {status ? <span className="aqua-badge">{status}</span> : null}
      </div>
      <AquaIndeterminateProgress />
    </div>
  );
}

export function AquaSearchField(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="aqua-search">
      <input className="aqua-input" {...props} />
    </div>
  );
}