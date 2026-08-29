import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { SocialIcon } from "./SocialIcon";
import { footerMenu, legalLinks, socialLinks, contactInfo } from "@/data/footer";

const redLink = "text-red-dark underline decoration-1 underline-offset-4 hover:text-navy";

export function Footer() {
  return (
    <footer id="site-footer" className="w-full bg-white py-16">
      <div className="container-1200">
        <Wordmark className="w-[220px]" />

        <div className="mt-14 grid gap-12 lg:grid-cols-3">
          <div>
            <p className="text-base">
              We're a professional services firm providing design, technology, consulting, and
              training services to government.
            </p>
            <p className="mt-6 text-base">
              Want to help us make an impact?
              <br />
              <Link to="/careers" className={redLink}>
                Check out our open positions.
              </Link>
            </p>
          </div>

          <div className="text-base">
            <p>Our mailing address is:</p>
            {contactInfo.addressLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className="mt-6">
              <a href={`tel:${contactInfo.phone}`} className={redLink}>
                {contactInfo.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${contactInfo.email}`} className={redLink}>
                {contactInfo.email}
              </a>
            </p>
          </div>

          <div>
            <nav aria-label="CivicActions footer menu">
              <div className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                {footerMenu.map((column, i) => (
                  <ul key={i} className="space-y-5">
                    {column.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.to}
                          className={`${redLink} inline-flex items-center gap-1.5`}
                        >
                          {item.label}
                          {item.external ? (
                            <ExternalLink aria-hidden="true" className="size-4" />
                          ) : null}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </nav>
            <ul className="mt-10 flex gap-3 lg:justify-end">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <SocialIcon link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-base">
          <span>&copy; 2026</span>
          {legalLinks.map((item) => (
            <Link key={item.label} to={item.to} className={redLink}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
