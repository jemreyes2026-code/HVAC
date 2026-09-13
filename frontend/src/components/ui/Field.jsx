export default function Field({ label, htmlFor, required = false, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[0.875rem] font-medium text-ink">
        {label}
        {required && (
          <span className="ml-0.5 text-crimson-light" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
    </div>
  );
}
