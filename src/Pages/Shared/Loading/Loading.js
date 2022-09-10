import { FadeLoader } from "react-spinners";


const Loading = () => {

    return (
        <div className="flex justify-center items-center h-screen">
            <FadeLoader className="color-primary w-40" />
        </div>
    );
};

export default Loading;