import { ListBase, useGetList } from "react-admin";
import { useEffect } from "react";

export const Dashboard = (props: any) => {

    const {data}: any = useGetList("");

    useEffect(() => {
        console.log("Test");
        console.log(data);

    }, [data])

    return (
        <div>
            Dashboard
        </div>
    )
}