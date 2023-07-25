import React from 'react';
import styles from './EResponse.module.css';
import { STATUS_COLORS, STATUS_TEXT } from './constants';
import { ChevronDown, ChevronUp } from './icon';
import EParams from './EParams';

export default function EResponse({
  method,
  endpoint,
  status,
  description,
  params,
  contentType,
}) {
  const [open, setOpen] = React.useState(false);

  const base = Math.floor(status / 100) * 100;

  return (
    <div className={styles.container}>
      <div
        className={styles.content}
        style={{
          backgroundColor: STATUS_COLORS[base]?.[0],
          color: STATUS_COLORS[base]?.[1],
          '&:hover': {
            backgroundColor: 'red',
          },
        }}
        onClick={() => setOpen(!open)}
      >
        <div className={styles.heading}>
          <p className={styles.headingStatus}>
            {status} {STATUS_TEXT[status]}
          </p>
          {description && (
            <p className={styles.headingDescription}>{description}</p>
          )}
          {open ? (
            <ChevronUp className={styles.icon} />
          ) : (
            <ChevronDown className={styles.icon} />
          )}
        </div>
        {open && (
          <div
            className={styles.inside}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <EParams
              method={method}
              endpoint={endpoint}
              type="RESPONSE BODY"
              params={params}
              contentType={contentType}
            />
          </div>
        )}
      </div>
    </div>
  );
}
