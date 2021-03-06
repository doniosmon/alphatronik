import { join } from "path";
import fs from 'fs';
import matter from "gray-matter";

const pagesDirectory = join(process.cwd(), '_pages');
const dynamicPagesDirectory = join(pagesDirectory, 'dynamic');

export function getSlugsFromDirectory(dir) {
  console.log(dir);
  return fs.readdirSync(dir);
}

export function getBySlug(dir, slug, fields=[]) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(dir, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');
  const {data,content} = matter(fileContents);

  const items = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getPageContentBySlug(slug, fields = []) {
  return getBySlug(pagesDirectory, slug, fields);
}

export function getDynamicPageContentBySlug(slug, fields = []) {
  return getBySlug(dynamicPagesDirectory, slug, fields);
}

export function getAllDynamicPages(fields = []) {
  const slugs = getSlugsFromDirectory(dynamicPagesDirectory);
  const pages = slugs.map((slug) => getDynamicPageContentBySlug(slug, fields));
  return pages;
}