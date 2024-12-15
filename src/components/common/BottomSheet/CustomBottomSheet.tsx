import { useRef, useState } from 'react';
import { Sheet, type SheetRef } from 'react-modal-sheet';

import { SHEET_SNAP_POINTS, SHEET_INITIAL_SNAP } from '@constants/sheet';
import { BottomSheetContent } from '@components/common/BottomSheet/CustomBottomSheet.style';

interface BottomSheetProps {
  children: React.ReactNode;
  isOpen?: boolean;
  onClose: () => void;
  showBackdrop?: boolean;
}

const CustomBottomSheet = ({
  children,
  isOpen = false,
  onClose,
  showBackdrop = true,
}: BottomSheetProps) => {
  const ref = useRef<SheetRef>();
  const [_, setSnapPoint] = useState<number>(SHEET_INITIAL_SNAP);

  return (
    <Sheet
      ref={ref}
      isOpen={isOpen}
      onClose={onClose}
      onSnap={(snapIndex) => {
        setSnapPoint(snapIndex);
      }}
      snapPoints={SHEET_SNAP_POINTS}
      initialSnap={SHEET_INITIAL_SNAP}
    >
      <Sheet.Container>
        <Sheet.Header />
        <BottomSheetContent disableDrag={true} style={{ paddingBottom: ref.current?.y }}>
          <Sheet.Scroller>{children}</Sheet.Scroller>
        </BottomSheetContent>
      </Sheet.Container>
      {showBackdrop ? <Sheet.Backdrop onTap={onClose} /> : <></>}
    </Sheet>
  );
};

export default CustomBottomSheet;
