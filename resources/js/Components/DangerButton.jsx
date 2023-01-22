export default function DangerButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `btn btn-accent ${
                    processing && 'loading'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
