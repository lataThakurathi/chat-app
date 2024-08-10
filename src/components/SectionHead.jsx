import clsx from "clsx";

const SectionHead = (props) => {
    const { children, className } = props;

    return <div className={clsx("section-head", className)}>{children}</div>;
};

export default SectionHead;
