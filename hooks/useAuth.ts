import { login, logout } from "@/state/slices/auth-slice";
import { RootState, useAppDispatch, useAppSelector } from "@/state/store";
import { useRouter } from "expo-router";

export default function useAuth(){
    const router = useRouter();
    const { isLoading, isLoggedIn, user, error } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const handleLogin = () => {
        dispatch(login({email: "We", password: "pass"}));
        router.replace("/(protected)/(tabs)");
    }

    const handleLogout = () => {
        dispatch(logout());
    }

    return {
        isLoading,
        isLoggedIn,
        user,
        error,
        handleLogin,
        handleLogout
    }
}