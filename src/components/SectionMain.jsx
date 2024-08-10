import clsx from "clsx";

const SectionMain = (props) => {
    const { children, className } = props;

    return <div className={clsx("section-main", className)}>{children}</div>;
};

export default SectionMain;
