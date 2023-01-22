export default function PrimaryButton({ type = 'submit', className = '', processing, children, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={
                `btn btn-primary ${
                    processing && 'loading'
                } ` + className
            }
            disabled={processing}
        >
            {children}
        </button>
    );
}
