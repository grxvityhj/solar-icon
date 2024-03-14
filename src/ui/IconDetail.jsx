import { useSearchParams } from 'react-router-dom';
import { useIcon } from '../services/useIcon';
import styles from './IconDetail.module.css';
import CopyToClipboard from 'react-copy-to-clipboard';
import toast from 'react-hot-toast';
import Copy from '../icons/Copy';
import { useState } from 'react';

function IconDetail({ simplify, onSimplify, onModal }) {
  let code;

  const { icon: curIcon } = useIcon();
  const [searchParams, _] = useSearchParams();

  const type = searchParams.get('type') || 'linear';
  const icon = searchParams.get('icon');
  const strokeWidth = searchParams.get('stroke-width') || '1.5';

  if (type === 'linear')
    code = simplify
      ? `<i class="solar-icon" stroke-width="${strokeWidth}" icon="${icon}"></i>`
      : `<i class="solar-icon" type="${type}" stroke-width="${strokeWidth}" icon="${icon}"></i>`;

  if (type !== 'linear')
    code = `<i class="solar-icon" type="${type}" icon="${icon}"></i>`;

  return (
    <>
      <div className={styles.col1}>
        <div
          className={styles.icon}
          dangerouslySetInnerHTML={{ __html: curIcon }}
        ></div>
        {/* <button className={styles.close} onClick={() => onModal(false)}>
          Close
        </button> */}
      </div>
      <div className={styles.col2}>
        <CopyToClipboard
          text={icon}
          onCopy={() =>
            toast('Copied!', {
              icon: '📋',
            })
          }
        >
          <div className={styles.nameWrap}>
            <h3 className={styles.name}>{icon}</h3>
            <Copy />
          </div>
        </CopyToClipboard>
        <blockquote className={styles.snippet}>
          <header className={styles.header}>
            <span className={styles.headerTitle}>HTML</span>
            <CopyToClipboard
              text={code}
              onCopy={() =>
                toast('Copied!', {
                  icon: '📋',
                })
              }
            >
              <span className={styles.copyBtn}>
                <Copy size="16" />
              </span>
            </CopyToClipboard>
          </header>
          <span>
            <CopyToClipboard
              text={code}
              onCopy={() =>
                toast('Copied!', {
                  icon: '📋',
                })
              }
            >
              <p className={styles.code}>{code}</p>
            </CopyToClipboard>
          </span>
        </blockquote>
        <footer className={styles.footer}>
          <CopyToClipboard
            text={curIcon}
            onCopy={() =>
              toast('Copied!', {
                icon: '📋',
              })
            }
          >
            <button>Copy svg</button>
          </CopyToClipboard>
          {type === 'linear' && (
            <button
              className={styles.simplify}
              onClick={() => onSimplify(cur => !cur)}
            >
              {!simplify && 'Simplify'}
              {simplify && 'Back to original'}
            </button>
          )}
        </footer>
      </div>
    </>
  );
}

export default IconDetail;
