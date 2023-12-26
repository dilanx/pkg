import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Color from 'color';
import styles from './styles.module.css';

function MaybeLink(props) {
  if (props.href) {
    return <Link {...props} />;
  }
  return <>{props.children}</>;
}
export default function BlogPostItemHeaderAuthor({ author, className }) {
  const { name, title, url, email, icon } = author;
  const link = url || (email && `mailto:${email}`) || undefined;
  const backgroundColor = Color({
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  }).saturate(0.1);
  const textColor = backgroundColor.isDark() ? 'white' : 'black';

  return (
    <div className={clsx('avatar margin-bottom--sm', className)}>
      {icon && (
        <div
          className={clsx('avatar__photo', styles.avatar)}
          style={{
            backgroundColor: backgroundColor.mix(Color('white')).hex(),
            color: textColor,
            font: icon.font,
          }}
        >
          <p>{icon.letters}</p>
        </div>
      )}

      {name && (
        <div
          className="avatar__intro"
          itemProp="author"
          itemScope
          itemType="https://schema.org/Person"
        >
          <div className="avatar__name">
            <MaybeLink href={link} itemProp="url">
              <span itemProp="name">{name}</span>
            </MaybeLink>
          </div>
          {title && (
            <small className="avatar__subtitle" itemProp="description">
              {title}
            </small>
          )}
        </div>
      )}
    </div>
  );
}
