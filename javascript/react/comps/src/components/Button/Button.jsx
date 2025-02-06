import { twMerge } from 'tailwind-merge';
import { GoBell } from "react-icons/go";
import { ImDatabase } from "react-icons/im";
import { MdCloudDownload } from "react-icons/md";
import className from "classnames";

export function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    icon,
    // pass through any other props
    ...rest
}) {
    
    /* ∙ classnames - keys of object are added to the class name string conditionally based on
     * a truthy value being supplied for the key. Other strings are always
     * supplied. 
     *
     * ∙ tailwind-merge(twMerge) - useful module to resolve conflicting
     * classes added to the same elements. Last class specified or refinement wins. */

    const classes = twMerge(className(
        // merge a potential className prop with our own props
        rest.className,
        "flex items-center px-3 py-1.5 border", {
        "border-blue-600 bg-blue-500 text-white": primary,
        "border-gray-900 bg-gray-900 text-white": secondary,
        "border-green-500 bg-green-500 text-white": success,
        "border-yellow-500 bg-yellow-500 text-white": warning,
        "border-red-500 bg-red-500 text-white": danger,
        "bg-white": outline,
        "rounded-full": rounded,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
    }));

    switch(icon) {
        case "bell":
            icon = <GoBell />;
            break;
        case "save":
            icon = <ImDatabase />;
            break;
        case "download":
            icon = <MdCloudDownload />;
            break;
        default:
            break;
    }

    return (
        <button className={classes} {...rest}>
            {icon}
            {children}
        </button>
    );
        
}
