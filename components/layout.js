import Breadcrumb from "./breadcrumb";
import Contact from "./contact";
import Container from "./container";
import Footer from "./footer";
import Header from "./header";
import SocialBar from "./socialBar";

export default function Layout({ children, pageTitle, links }) {
  return (
    <div>
      <SocialBar />
      <Header links={links} />
      <Breadcrumb>{pageTitle}</Breadcrumb>
      <Container>
        <main className="sm:mx-2 md:mx-8 my-4 sm:my-12 text-gray-76 sm:text-sm leading-relaxed w-screen">{children}</main>
      </Container>
      <div className="flex flex-col flex-1 justify-end">
        <Contact />
        <Footer links={links}/>
      </div>
    </div>
  );
}
