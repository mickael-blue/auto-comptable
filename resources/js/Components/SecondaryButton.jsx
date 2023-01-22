export default function SecondaryButton({ type = 'button', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `btn btn-secondary ${
                    processing && 'loading'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
