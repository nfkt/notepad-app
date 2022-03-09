import React from "react";

export const useFloatingActionButton = () => {
  const [openFloatingBtn, setOpen] = React.useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  return {
    openFloatingBtn,
    handleModalOpen,
    handleModalClose,
  };
};
