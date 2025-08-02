import { ModalProps } from "@mantine/core";
import { ReactElement, ReactNode } from "react";

interface CustomModalProps {
  actionElement?: ReactElement; // Custom element to open the modal
  children?: ReactNode; // Content inside the modal
  modalProps?: Partial<ModalProps>; // Optional Mantine Modal props
  label: string;
}
