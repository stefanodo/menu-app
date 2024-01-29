/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yNrM9UQMgjt
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      key="1"
      className="flex justify-center items-center h-16 bg-white dark:bg-gray-800 pb-0"
    >
      <div className="flex justify-between items-center">
        <Link className="flex items-center" href="#">
          <span className="sr-only">TravelCo</span>
        </Link>
        <div className="relative" />
      </div>
      <nav className="flex gap-6 justify-center">
        <Link className="text-sm font-medium hover:underline" href="#">
          <HomeIcon className="h-4 w-4" />
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          <NavigationIcon className="h-4 w-4" />
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          <InfoIcon className="h-4 w-4" />
        </Link>
        <Link className="text-sm font-medium hover:underline" href="#">
          <ContactIcon className="h-4 w-4" />
        </Link>
      </nav>
    </header>
  );
}

function ContactIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <circle cx="12" cy="10" r="2" />
      <line x1="8" x2="8" y1="2" y2="4" />
      <line x1="16" x2="16" y1="2" y2="4" />
    </svg>
  );
}

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function NavigationIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );
}
