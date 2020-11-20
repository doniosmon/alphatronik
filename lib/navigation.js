import { join } from "path";
import { getAllDynamicPages, getPageContentBySlug } from "./markdown";

export function getNavigationLinks() {
  const fields = ['title','slug','navigation','footer'];
  const dynamicPages = getAllDynamicPages(fields);
  const home = getPageContentBySlug('home', fields);
  console.log('dynamicPages');
  console.log(dynamicPages);
  console.log('home');
  console.log(home);

  const links = [{ ...home, slug: '/' }, ...dynamicPages]
    .map(({title, slug, navigation, footer}) => ({
      title,
      href: join('/', slug),
      navigation: navigation || false,
      footer: footer || false,
    }));

  return links;
}