import React from 'react';
import styles from './EMethod.module.css';
import { METHOD_COLORS } from './constants';
import { ChevronDown, ChevronUp } from './icon';

export default function EMethod({ method, endpoint, servers }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div
      className={styles.container}
      style={{
        color: METHOD_COLORS[method][1],
      }}
    >
      <p className={styles.method}>{method}</p>
      <div className={styles.endpoint}>
        <div className={styles.endpointContent}>
          <p className={styles.endpointText}>{endpoint}</p>
          {open && (
            <div className={styles.servers}>
              {servers?.map((server) => (
                <p key={`ep-${method}-${endpoint}-s-${server}`}>
                  {server}
                  <span>{endpoint}</span>
                </p>
              ))}
            </div>
          )}
        </div>
        <button
          title={open ? 'Hide full endpoints' : 'Show full endpoints'}
          className={styles.showMore}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <ChevronUp className={styles.icon} />
          ) : (
            <ChevronDown className={styles.icon} />
          )}
        </button>
      </div>
    </div>
  );
}
