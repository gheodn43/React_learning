export default function SectionProduct1() {
    return (
        <div className="px-5 py-2 position-relative d-flex justify-content-center align-content-end" style={{ background: "white", height: "30vh" }}>
            <div className="position-absolute bottom-0 z-2 d-flex flex-row gap-5">
                <img src="/lab2/chai-xanh-f.png" style={{ height: "30vh", transform: "rotate(-25deg)" }}></img>
                <img src="/lab2/chai-tim-f.png" style={{ height: "36vh" }}></img>
                <img src="/lab2/chai-cam-f.png" style={{ height: "30vh", transform: "rotate(25deg)" }}></img>
            </div>
            <div className="position-absolute bottom-0 d-flex gap-3">
                <img src="/lab2/watermelon.png" style={{ height: "15vh" }}></img>
                <img src="/lab2/man-xoi.png" style={{ height: "15vh", transform: "rotate(-25deg)" }}></img>
                <img src="/lab2/chuoi.png" className="position-absolute bottom-0 z-3" style={{ height: "7vh", transform: "rotate(25deg)" }}></img>
                <img src="/lab2/nho.png"className="position-absolute bottom-0 z-3" style={{ height: "15vh", transform: "rotate(25deg)" }}></img>
            </div>

        </div>
    )
}