import clsx from "clsx";

const Container = (props) => {
    const { children, className } = props;

    return <div className={clsx("container", className)}>{children}</div>;
};

export default Container;
