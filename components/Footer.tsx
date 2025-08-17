import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-10 grid gap-8 md:grid-cols-4">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Aurora logo" width={24} height={24} />
            <span className="font-heading">Aurora</span>
          </div>
          <p className="text-sm text-textMuted">Glow in the Dark Innovation.</p>
        </div>
        <div>
          <h5 className="mb-2 font-medium text-white">Quick links</h5>
          <ul className="space-y-2 text-sm text-textMuted">
            <li>
              <a className="link-underline" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="link-underline" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="link-underline" href="#get-started">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="mb-2 font-medium text-white">Social</h5>
          <ul className="space-y-2 text-sm text-textMuted">
            <li>
              <Link className="link-underline" href="#">
                Twitter
              </Link>
            </li>
            <li>
              <Link className="link-underline" href="#">
                GitHub
              </Link>
            </li>
            <li>
              <Link className="link-underline" href="#">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <div id="contact">
          <h5 className="mb-2 font-medium text-white">Contact</h5>
          <p className="text-sm text-textMuted">hello@aurora.example</p>
          <p className="mt-6 text-xs text-textMuted">
            © {new Date().getFullYear()} Aurora. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
