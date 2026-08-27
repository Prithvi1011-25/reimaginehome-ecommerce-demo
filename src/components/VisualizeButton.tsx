type VisualizeButtonProps = {
  variant?: 'hero' | 'card';
  label?: string;
  disabled?: boolean;
  onClick: () => void;
};

export function VisualizeButton({
  variant = 'card',
  label = 'Visualize',
  disabled = false,
  onClick,
}: VisualizeButtonProps) {
  return (
    <button
      type="button"
      className={`btn-visualize ${variant === 'hero' ? 'btn-visualize--hero' : 'btn-visualize--card'}`}
      disabled={disabled}
      onClick={onClick}
    >
      <svg className="btn-visualize__icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3l1.2 3.6L17 7.8l-3.6 1.2L12 12.6 10.8 9 7.2 7.8 10.8 6.6 12 3Z"
          fill="currentColor"
        />
        <path
          d="M18 14l.8 2.4 2.4.8-2.4.8L18 20l-.8-2.4-2.4-.8 2.4-.8L18 14Z"
          fill="currentColor"
        />
      </svg>
      {label}
    </button>
  );
}
