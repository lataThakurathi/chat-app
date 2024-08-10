import clsx from "clsx";

const Section = (props) => {
    const { children, className } = props;

    return <div className={clsx("section", className)}>{children}</div>;
};

export default Section;
