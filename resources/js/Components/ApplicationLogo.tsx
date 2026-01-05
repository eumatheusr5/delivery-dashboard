export default function ApplicationLogo(props: React.SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0s24 10.745 24 24-10.745 24-24 24c-3.477 0-6.754-.733-9.725-2.052"
                fill="currentColor"
            />
            <path
                d="M24 6c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18S33.941 6 24 6z"
                fill="white"
            />
            <path
                d="M24 12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
                fill="currentColor"
            />
        </svg>
    );
}

