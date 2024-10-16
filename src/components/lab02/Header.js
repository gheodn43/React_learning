export default function Header() {
    return (
        <div className="d-flex flex-column pb-5" style={{ background: '#BBBBBF' }}>
            <div className="px-5 d-flex flex-row justify-content-between align-items-center" >
                <img src="/lab2/logo-f.png" style={{ height: '65px' }} />
                <div className="fw-bold px-4 py-2 rounded-3" style={{ background: '#BBBBBF' }}>Home</div>
            </div>
            <div>
                <h1 className="fw-bold text-center" style={{ color: "#291A0D" }}>DRINK. CLEANSE. LIVE</h1>
            </div>
            <div className="container d-flex justify-content-center align-items-center" >
                <div className="border-1 p-1 d-flex gap-2 align-items-center" style={{border: "1px solid #291A0D"}}>
                    <h4 className="px-5 mb-0">3 STEP JUICE CLEANSE</h4>
                    <div className="px-3 py-2" style={{ background: "#7D406B" }}>Start your cleanse</div>
                </div>
            </div>

        </div>

    )
}