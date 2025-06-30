import react from "react";

const Spinner = () => {
    return (
        // <!-- Loading Dots -->
        <div className="flex space-x-1">
            <div className="size-3 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.3s] dark:bg-orange-400"></div>
            <div className="size-3 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.15s] dark:bg-orange-400"></div>
            <div className="size-3 animate-bounce rounded-full bg-orange-500 dark:bg-orange-400"></div>
        </div>
    )
}

export default Spinner;