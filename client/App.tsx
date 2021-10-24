import React from "react";
import "./stylesCommon/app.css";

export function App() {
    return (
        <div className="wrap">
            <div className="description">
                <h1 className="description__title">Hello i SSR</h1>
                <p className="description__textContent">
                    If u want, u can click right button mouse to view the page code
                </p>
            </div>
        </div>
    );
}