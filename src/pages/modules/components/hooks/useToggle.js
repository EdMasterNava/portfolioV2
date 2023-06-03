import * as React from 'react';

export function useToggle(_default = false) {
  const [open, setOpen] = React.useState(_default);

  const toggle = React.useCallback(() => {
    setOpen((open) => !open);
  }, []);

  return React.useMemo(() => [open, toggle, setOpen], [toggle, open]);
}