import he from 'he';

import Button from 'components/Button';

import styles from './styles.module.scss';

interface ContentBoxProps {
  text: string;
  current: number;
  total: number;
  confirmLabel: string;
  denyLabel: string;
  onConfirm: () => void;
  onDeny: () => void;
}

const ContentBox = ({
  text,
  current,
  total,
  confirmLabel,
  denyLabel,
  onConfirm,
  onDeny,
}: ContentBoxProps) => {
  return (
    <>
      <div className={styles.contentBox}>
        <div className={styles.content}>
          <p className="paragraph">{he.decode(text)}</p>
        </div>
        <span className="span">
          {current} of {total}
        </span>
      </div>
      <div className={styles.buttons}>
        <Button label={confirmLabel} onClick={onConfirm} />
        <Button label={denyLabel} onClick={onDeny} />
      </div>
    </>
  );
};

export default ContentBox;
