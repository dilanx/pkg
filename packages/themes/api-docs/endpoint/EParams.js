import React from 'react';
import styles from './EParams.module.css';
import { METHOD_COLORS } from './constants';

export default function EParams({
  method,
  endpoint,
  type,
  params,
  contentType,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.headingType}>{type}</p>
        {contentType && (
          <p className={styles.headingContentType}>{contentType}</p>
        )}
      </div>
      {params.map((param, i) => (
        <div
          className={styles.param}
          key={`ep-${method}-${endpoint}-${type}-${i}`}
        >
          <p className={styles.paramId}>
            {param.id}
            {param.required && <span className={styles.required}>*</span>}
          </p>
          {param.type && (
            <p
              className={styles.paramType}
              style={{ color: METHOD_COLORS[method][1] }}
            >
              {param.type}
            </p>
          )}
          <p className={styles.paramDesc}>{param.description}</p>
        </div>
      ))}
    </div>
  );
}
