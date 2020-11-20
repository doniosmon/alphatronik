import { join } from 'path';
import Layout from './layout';
import PrintMarkdown from '../components/markdown/printMarkdown';
import WithImage from '../components/markdown/withImage';

export default function DynamicLayout({slug,title,image,markdown,links}) {
  const canonical = join(process.env.CANONICAL_URL, slug);
  return (
    <Layout pageTitle={title} links={links}>
      <PrintMarkdown markdown={markdown} image={image}/>
    </Layout>
  );
}