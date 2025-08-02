"use client";
import { Modal, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import { CustomModalProps } from "./@types/customModalProps.type";

function CustomModal({
  actionElement,
  children,
  modalProps,
  label,
}: CustomModalProps) {
  const [opened, { open, close }] = useDisclosure(false);

  // Clone children and pass handleClose prop
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { handleClose: close } as any); // Pass handleClose
    }
    return child;
  });
  return (
    <>
      <Modal.Root
        opened={opened}
        onClose={close}
        size={modalProps?.size ?? "lg"}
        centered={modalProps?.centered ?? true}
        {...modalProps}
      >
        <Modal.Overlay backgroundOpacity={0.2} blur={12} />
        <Modal.Content>
          <Modal.Header>
            <Title order={3}>{modalProps?.title ?? label}</Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body> {enhancedChildren}</Modal.Body>
        </Modal.Content>
      </Modal.Root>
      <div onClick={open}>{actionElement}</div>
    </>
  );
}

export default CustomModal;
