import { nprogress } from "@mantine/nprogress";
import { useEffect } from "react";

function useProgress({ isRefetching }: { isRefetching: boolean }) {
    useEffect(() => {
        if (isRefetching) {
            nprogress.start();
        } else {
            nprogress.complete();
        }
    }, [isRefetching]);

    return null;
}

export default useProgress;