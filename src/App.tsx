import { AnimatePresence, motion } from "framer-motion";
import { Fragment, useState } from "react";

const page_animation_code =
    '<AnimatePresence>\n    {show && <Page page={page} key={page} />}\n</AnimatePresence>\n\nfunction Page({ page }: { page: number }) {\n    return (\n        <motion.div\n            className="absolute w-full h-full flex justify-center items-center"\n            initial={{ opacity: 0, x: -50 }}\n            key={`motion div ${page}`}\n            animate={{ opacity: 1, x: 0 }}\n            exit={{ opacity: 0, x: 50 }}\n        >\n            {page}\n        </motion.div>\n    );\n}';
const popup_code =
    '<AnimatePresence>\n    {show && <Page page={page} key={page} code={page_animation_code} />}\n</AnimatePresence>\n\nfunction ShowCode({\n    setOpen,\n    code\n}: {\n    setOpen: React.Dispatch<React.SetStateAction<boolean>>;\n    code: string;\n}) {\n    return (\n        <motion.div\n            className="absolute w-full h-screen flex items-center justify-center z-50"\n            onMouseDown={() => setOpen(false)}\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            exit={{ opacity: 0 }}\n        >\n            <div\n                className="w-4/5 h-4/5"\n                onMouseDown={(e) => e.stopPropagation()}\n            >\n                <textarea\n                    name=""\n                    id=""\n                    readOnly\n                    className="w-full p-4 h-full bg-opacity-75 font-bold font-mono bg-black text-white rounded-lg"\n                >\n                    {code}\n                </textarea>\n            </div>\n        </motion.div>\n    );\n}\n';

export default function App() {
    const [page, setPage] = useState(0);
    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const [openPopup, setOpenPopup] = useState(false);
    return (
        <Fragment>
            <AnimatePresence>
                {open && (
                    <ShowCode
                        setOpen={setOpen}
                        key={"show page transition code"}
                        code={page_animation_code}
                    />
                )}
                {openPopup && (
                    <ShowCode
                        setOpen={setOpenPopup}
                        key={"show popup code"}
                        code={popup_code}
                    />
                )}
            </AnimatePresence>
            <div className="w-full min-h-screen bg-gradient-to-tr from-orange-300 to-purple-300 flex items-center justify-center flex-col gap-4 ">
                <div className="flex flex-col gap-2 fixed top-5 left-5">
                    <button
                        className="bg-black bg-opacity-75 text-white font-mono rounded-lg px-2"
                        onMouseDown={() => setOpen(true)}
                    >
                        Open Page Transition Code
                    </button>
                    <button
                        className="bg-black bg-opacity-75 text-white font-mono rounded-lg px-2"
                        onMouseDown={() => setOpenPopup(true)}
                    >
                        Open Popup Code
                    </button>
                </div>

                <div className="h-96 aspect-video bg-white rounded-lg relative">
                    <AnimatePresence>
                        {show && <Page page={page} key={page} />}
                    </AnimatePresence>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div>
                        <button
                            className="rounded-full bg-white size-6 flex justify-center items-center text-sm"
                            onMouseDown={() => setPage(page - 1)}
                        >
                            {"<"}
                        </button>
                    </div>
                    <div>
                        <button
                            className="rounded-lg bg-white h-6 px-4 flex justify-center items-center text-sm"
                            onMouseDown={() => setShow(!show)}
                        >
                            {"toggle"}
                        </button>
                    </div>
                    <div>
                        <button
                            className="rounded-full bg-white size-6 flex justify-center items-center text-sm"
                            onMouseDown={() => setPage(page + 1)}
                        >
                            {">"}
                        </button>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

function Page({ page }: { page: number }) {
    return (
        <motion.div
            className="absolute w-full h-full flex justify-center items-center"
            initial={{ opacity: 0, x: -50 }}
            key={`motion div ${page}`}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
        >
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
            {page}
        </motion.div>
    );
}

function ShowCode({
    setOpen,
    code,
}: {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    code: string;
}) {
    return (
        <motion.div
            className="absolute w-full h-screen flex items-center justify-center z-50"
            onMouseDown={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div
                className="w-4/5 h-4/5"
                onMouseDown={(e) => e.stopPropagation()}
            >
                <textarea
                    name=""
                    id=""
                    readOnly
                    className="w-full p-4 h-full bg-opacity-75 font-bold font-mono bg-black text-white rounded-lg"
                >
                    {code}
                </textarea>
            </div>
        </motion.div>
    );
}
