import react from "react";

const Spinner = () => {
    return (
        // <!-- Loading Dots -->
        <div class="flex space-x-1">
            <div class="size-3 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.3s] dark:bg-orange-400"></div>
            <div class="size-3 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.15s] dark:bg-orange-400"></div>
            <div class="size-3 animate-bounce rounded-full bg-orange-500 dark:bg-orange-400"></div>
        </div>
    )
}

export default Spinner;