import { Outlet, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "./authApiSlice";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const PersistLogin = () => {
    const [refresh] = useRefreshMutation();
    const token = useSelector(selectCurrentToken);
    const effectRan = useRef(false);
    const [trueSuccess, setTrueSuccess] = useState(false);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (effectRan.current === true || process.env.NODE_ENV !== 'development') { // React 18 Strict Mode
            const verifyRefreshToken = async () => {
                console.log('Verifying refresh token');
                try {
                    //const response = 
                    await refresh();
                    //const { accessToken } = response.data
                    setTrueSuccess(true);
                } catch (err) {
                    console.error(err);
                } finally {
                    setIsLoading(false);
                }
            }

            if (!token) verifyRefreshToken();
            else setIsLoading(false);
        }
        return () => effectRan.current = true;
        // eslint-disable-next-line
    }, [])


    let content;
    if (isLoading) {
        content = <p>Loading...</p>; // Or your loading spinner
    } else { // persisted check
        content = <Outlet />;
    }

    return content;
};

export default PersistLogin;
