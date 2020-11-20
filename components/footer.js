import Link from "next/link";
import Container from "./container";

export default function Footer({ links }) {
  console.log('Links:');
  console.log(links);
  const footerLinks = links.filter(({footer})=>footer);
  console.log('footerLinks:');
  console.log(footerLinks);
  return (
    <footer className="w-screen bg-black-27">
      <Container>
        <div className="flex items-center justify-between w-full p-8 text-white text-sm flex-col md:flex-row">
          <div>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-a1 transition-colors ease-linear duration-100 my-2 md:my-0 block"
            >
              Connect on linkedin
            </a>
          </div>

          <ul className="">
            {footerLinks.map(({title, href}) => (
              <li key={href} className="">
                <Link href={href}>
                  <a>
                    {title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
