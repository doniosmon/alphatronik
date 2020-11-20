
import DynamicLayout from '../components/dynamicLayout';
import Nav from '../components/nav'
import { getPageContentBySlug } from '../lib/markdown';
import { getNavigationLinks } from '../lib/navigation'

export default function IndexPage({page, links}) {
  const {title, image, slug, markdown } = page;
  console.log('markdown');
  console.log(markdown);
  return (
    <DynamicLayout title={title} image={image} slug={slug} markdown={markdown} links={links} />
  );
}

export async function getStaticProps() {
  const links = getNavigationLinks();
  console.log('links:');
  console.log(links);
  const page = getPageContentBySlug('home', ['title', 'image', 'slug', 'content']);
  // console.log('page:');
  // console.log(page);

  return {
    props: {
      page: {
        ...page,
        markdown: page.content,
      },
      links,
    }
  };
}
