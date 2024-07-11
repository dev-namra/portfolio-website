import React from "react";
import IconButton from '../elements/IconButton';

const Skill = () => {
    return (
        <section className="my-4 md:my-10">
            <div className="flex flex-col items-center justify-center">
                <p className="text-xl md:text-2xl mb-4 text-[#282828] font-darker-grotesque font-bold">Stack:</p>
                <div className="flex flex-row items-center justify-center gap-5">
                    <IconButton iconClass="ri-html5-line" />
                    <IconButton iconClass="ri-css3-line" />
                    <IconButton iconClass="ri-javascript-line" />
                    <IconButton iconClass="ri-bootstrap-line" />
                    <IconButton iconClass="ri-tailwind-css-line" />
                    <IconButton iconClass="ri-reactjs-line" />
                    <IconButton iconClass="ri-nodejs-line" />
                    <IconButton iconClass="ri-git-fork-line" />
                </div>
            </div>
        </section>

    );
};

export default Skill;
