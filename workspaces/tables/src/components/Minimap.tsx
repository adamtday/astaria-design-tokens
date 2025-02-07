import React, {
  useEffect,
  useCallback,
  useState,
  MutableRefObject,
  ReactNode,
  CSSProperties,
} from 'react';
import classNames from '../utils/classnames';

type ClassesProps = {
  visible?: boolean;
  offset?: number;
  children: ReactNode;
  style?: any;
};

const Wrapper: React.FC<ClassesProps> = ({
  children,
  visible,
  offset = 10,
}) => {
  return (
    <div
      className={classNames(
        'absolute',
        'bottom-4',
        'shadow-md',
        'right-10 w-auto h-[56px] z-1 bg-gohan rounded-moon-i-sm p-1 pointer-events-none',
        visible ? '' : 'opacity-0'
      )}
    >
      {children}
    </div>
  );
};
const Grid: React.FC<ClassesProps> = ({ children }) => {
  return (
    <div className="grid grid-flow-col h-full gap-1 relative auto-cols-[minmax(0,_2fr)]">
      {children}
    </div>
  );
};
const Viewport: React.FC<{ styles: CSSProperties }> = ({ styles }) => {
  return (
    <div
      style={styles}
      className="absolute w-0 h-0 overflow-hidden rounded-moon-i-sm border-2"
    />
  );
};
const Column: React.FC<ClassesProps> = ({ children }) => {
  return <div className="h-full w-2 bg-goku/80 rounded-sm">{children}</div>;
};

type Props = {
  numberOfColumns: number;
  tableRef: MutableRefObject<HTMLElement | null>;
  footerRef: MutableRefObject<HTMLElement | null>;
};

let timeoutId: ReturnType<typeof setTimeout>;
const TIMEOUT = 150;

const Minimap: React.FC<Props> = ({ tableRef, footerRef, numberOfColumns }) => {
  const [styles, setStyles] = useState({});
  const [visible, setVisible] = useState(false);
  const [footerHeight, setFooterHeight] = useState(0);

  const handleUpdateViewport = useCallback(() => {
    if (!tableRef.current) return {};

    const fullHeight = tableRef.current.scrollHeight;
    const fullWidth = tableRef.current.scrollWidth;

    const viewportHeight = tableRef.current.clientHeight;
    const viewportWidth = tableRef.current.clientWidth;

    const scrollTop = tableRef.current.scrollTop;
    const scrollLeft = tableRef.current.scrollLeft;

    setStyles({
      height: `${(viewportHeight / fullHeight) * 100}%`,
      width: `${(viewportWidth / fullWidth) * 100}%`,
      top: `${(scrollTop / fullHeight) * 100}%`,
      left: `${(scrollLeft / fullWidth) * 100}%`,
      borderColor: 'rgb(var(--piccolo))',
    });

    setVisible(true);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      setVisible(false);
    }, TIMEOUT);
  }, [tableRef]);
  useEffect(() => {
    if (!footerRef || !footerRef.current) return;
    setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef, setFooterHeight]);
  useEffect(() => {
    if (!tableRef || !tableRef.current) return;
    const current = tableRef.current;

    handleUpdateViewport();
    current.addEventListener('scroll', handleUpdateViewport, { passive: true });
    return () => {
      current.removeEventListener('scroll', handleUpdateViewport);
      clearTimeout(timeoutId);
    };
  }, [tableRef, handleUpdateViewport]);

  return (
    <Wrapper visible={visible} offset={footerHeight}>
      <Grid>
        <Viewport styles={styles} />
        {[...new Array(numberOfColumns)].map((_, index) => (
          <Column key={index} children={''} />
        ))}
      </Grid>
    </Wrapper>
  );
};

export default Minimap;
