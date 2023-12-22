import React from 'react';
import clsx from 'clsx';
import { translate } from '@docusaurus/Translate';
import { usePluralForm } from '@docusaurus/theme-common';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
// Very simple pluralization: probably good enough for now
function useReadingTimePlural() {
  const { selectMessage } = usePluralForm();
  return (readingTimeFloat) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: 'theme.blog.post.readingTime.plurals',
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: 'One min read|{readingTime} min read',
        },
        { readingTime }
      )
    );
  };
}
function capitalize(text) {
  const words = text.split(' ');
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
function ReadingTime({ readingTime }) {
  const readingTimePlural = useReadingTimePlural();
  return <>{readingTimePlural(readingTime)}</>;
}
function Date({ date, formattedDate }) {
  return (
    <time dateTime={date} itemProp="datePublished">
      {formattedDate}
    </time>
  );
}
function Spacer() {
  return <>{' · '}</>;
}
export default function BlogPostItemHeaderInfo({ className }) {
  const { metadata } = useBlogPost();
  const { date, formattedDate, readingTime, tags, frontMatter } = metadata;
  const category = tags?.[0];

  const updated = frontMatter.updated;
  let formattedUpdated = undefined;
  if (updated) {
    formattedUpdated = Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC',
    }).format(new Date(updated));
  }
  return (
    <div className={clsx(styles.container, 'margin-vert--md', className)}>
      {category ? (
        <Link
          to={category.permalink}
          className={clsx('blog-item-category', `cat-${category.label}`)}
        >
          {capitalize(category.label)}
        </Link>
      ) : (
        <p className="blog-item-category cat-none">Uncategorized</p>
      )}
      <Spacer />
      <Date date={date} formattedDate={formattedDate} />
      {typeof formattedUpdated !== 'undefined' && (
        <>
          (updated <Date date={updated} formattedDate={formattedUpdated} />)
        </>
      )}
      {typeof readingTime !== 'undefined' && (
        <>
          <Spacer />
          <ReadingTime readingTime={readingTime} />
        </>
      )}
    </div>
  );
}
