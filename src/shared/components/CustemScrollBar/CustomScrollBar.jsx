import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';
import './CustomScrollBar.css';

const CustomScrollBar = ({ children, className }) => {
  return (
    <OverlayScrollbarsComponent
      options={{ scrollbars: { autoHide: 'scroll' } }}
      className={className}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};

export default CustomScrollBar;
