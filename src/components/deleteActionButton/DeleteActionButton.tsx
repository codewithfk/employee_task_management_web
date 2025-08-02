import {
    ActionIcon,
    ActionIconProps,
    Button,
    Flex,
    Text,
    TextInput
} from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconArchive, IconTrash } from "@tabler/icons-react";
import { ReactNode, memo, useCallback, useEffect, useState } from "react";
import CustomTooltip from "../customTooltip/CustomTooltip";

interface ConfirmationProps {
    onConfirm: (modalClose: VoidFunction) => void;
    isLoading?: boolean;
}
interface IDeleteActionButton extends ConfirmationProps {
    isError?: boolean;
    actionElement?: ReactNode;
    buttonProps?: ActionIconProps;
    type?: "text";
    actionType?: "delete" | "archive";
}
function DeleteActionButton({
    onConfirm,
    isLoading,
    actionElement,
    buttonProps,
    isError,
    type,
    actionType = "delete"
}: IDeleteActionButton) {
    const handleDelete = (actionType: "delete" | "archive") => {
        modals.openConfirmModal({
            modalId: `${actionType}-action-modal`,
            title: actionType === "delete" ? "Delete" : "Archive",
            closeOnConfirm: false,

            centered: true,
            children: (
                <Text size="sm">
                    {actionType === "delete"
                        ? "Are you sure you want to delete this? This action cannot be undone."
                        : "Are you sure you want to archive this? You can restore it later if needed."}
                </Text>
            ),

            labels: {
                confirm: actionType === "delete" ? "Delete" : "Archive",
                cancel: `No don't ${actionType} it`
            },
            confirmProps: { color: "red", loading: isLoading },
            cancelProps: { disabled: isLoading },
            onConfirm: () => onConfirm(modalClose)
        });
    };

    const handleTypeDelete = useCallback(
        (actionType: "delete" | "archive") => {
            modals.open({
                modalId: `${actionType}-action-modal`,
                title: actionType === "delete" ? "Delete" : "Archive",
                children: (
                    <TextDelete
                        onConfirm={onConfirm}
                        isLoading={isLoading}
                        actionType={actionType}
                    />
                ),
                centered: true
            });
        },
        [isLoading]
    );
    useEffect(() => {
        if (isLoading || isError) {
            type === "text" ? handleTypeDelete(actionType) : handleDelete(actionType);
        }
    }, [isLoading, isError]);

    const modalClose = () => modals.close(`${actionType}-action-modal`);
    return actionElement ? (
        <div
            onClick={
                type === "text"
                    ? () => handleTypeDelete(actionType)
                    : () => handleDelete(actionType)
            }
        >
            {actionElement}
        </div>
    ) : (
        <CustomTooltip label={actionType === "delete" ? "Delete" : "Archive"}>
            <ActionIcon {...buttonProps} onClick={() => handleDelete(actionType)}>
                {actionType === "delete" ? (
                    <IconTrash size={"0.9rem"} />
                ) : (
                    <IconArchive size={"0.9rem"} />
                )}
            </ActionIcon>
        </CustomTooltip>
    );
}

export default memo(DeleteActionButton);

const TextDelete = ({
    onConfirm,
    isLoading,
    actionType
}: ConfirmationProps & { actionType: "delete" | "archive" }) => {
    const [error, setError] = useState("");
    const [text, setText] = useState("");
    const actionWord = actionType === "delete" ? "DELETE" : "ARCHIVE";

    const handleSubmit = () => {
        if (text !== actionWord) {
            return setError(`Please type ${actionWord} to complete this action.`);
        }
        onConfirm(() => {
            modals.closeAll();
        });
    };

    return (
        <>
            <TextInput
                placeholder={`Please type ${actionWord} to confirm`}
                onChange={(event) => {
                    setText(event.target.value);
                    error && setError("");
                }}
                value={text}
                error={error}
                mb={"md"}
            />
            <Flex justify={"flex-end"}>
                <Button
                    style={{ borderColor: "#ced4da" }}
                    mr={"sm"}
                    variant={"outline"}
                    color="dark"
                    onClick={() => modals.closeAll()}
                    disabled={isLoading}
                >
                    No don't {actionType} it
                </Button>
                <Button color={"red"} onClick={handleSubmit} loading={isLoading}>
                    {actionType === "delete" ? "Delete" : "Archive"}
                </Button>
            </Flex>
        </>
    );
};