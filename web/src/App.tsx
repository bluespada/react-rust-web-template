import React from 'react';

export default function App(){
    const [count, setCount] = React.useState(0);
    return (<>
        <div style={{ width: "100%", height: "100%"}}>
            <div style={{ width: "100%", height: "100%", minHeight: "90vh" }}>
                <div style={{ 
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    minHeight: "95vh",
                }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "2rem",
                        }}
                    >
                        <img alt="rust-logo" src="/rust-lang.png" height={95}/>
                        <img alt="react-logo" src="/react-logo.png" height={95}/>
                    </div>
                    <div style={{paddingTop: "12px"}}>
                        <h1>
                            <span>Rust</span> + <span>Vite React</span>
                        </h1>
                    </div>
                    <div>
                        <button
                            style={{
                                backgroundColor: "#7BA880",
                                color: "#FFFFFF",
                                padding: ".35rem .8rem",
                                border: "0px",
                                borderRadius: ".8rem",
                            }}
                            onClick={() => setCount(count + 1)}
                        >
                            You are clicking me {count} time
                        </button>
                    </div>
                    <div style={{paddingTop: "64px"}}>
                        Edit <span className="codeblock" style={{ fontStyle: "italic" }}>web/src/App.tsx</span> and save to check HMR
                    </div>
                    <div style={{paddingTop: "32px"}}>
                        <h3>Getting Started</h3>
                    </div>
                    <div style={{paddingTop: ".5rem", display:"flex", flexDirection: "row", gap: ".85rem"}}>
                        <a href="https://actix.rs/doc">Actix</a>
                        <a href="https://vitejs.dev/">Vite</a>
                    </div>
                    <div style={{paddingTop: ".5rem", display:"flex", flexDirection: "row", gap: ".85rem"}}>
                        <a href="https://www.rust-lang.org/" target="_">Learn about rust</a>
                        <a href="https://react.dev/" target="_">Learn about React</a>
                        <a href="https://www.typescriptlang.org/" target="_">Learn about typescript</a>
                    </div>
                </div>
            </div>
        </div>
    </>);
}
