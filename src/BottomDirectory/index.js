import React from "react";
import {Link} from "react-router-dom";

function BottomDirectory({active}) {
    return (
        <div className="row pb-3">
            <ul className="nav nav-pills">
                <li className="nav-item col-2 text-center">
                    <Link className={`nav-link ${active === 'BucketList' ? "active" : ""}`} to="/list">
                        <i className="bi bi-list-ol"></i>
                        <span className="d-none d-md-inline-block"> Bucket List</span>
                    </Link>
                </li>
                <li className="nav-item col-2 text-center">
                    <Link className={`nav-link ${active === 'Explore' ? "active" : ""}`} to="/">
                        <i className="bi bi-compass"></i>
                        <span className="d-none d-md-inline-block"> Explore Completed</span>
                    </Link>
                </li>
                <li className="nav-item col-2 text-center">
                    <Link className={`nav-link ${active === 'ShotCounts' ? "active" : ""}`}  to="/shotCounts">
                        <i className="bi bi-cup-straw"></i>
                        <span className="d-none d-md-inline-block"> Explore Shots</span>
                    </Link>
                </li>
                <li className="nav-item col-2 text-center">
                    <Link className={`nav-link ${active === 'People' ? "active" : ""}`}  to="/people">
                        <i className="bi bi-people-fill"></i>
                        <span className="d-none d-md-inline-block"> People</span>
                    </Link>
                </li>
                <li className="nav-item col-2 text-center">
                    <Link className={`nav-link ${active === 'Shots' ? "active" : ""}`}  to="/shots">
                        <i className="bi bi-cup-straw"></i>
                        <span className="d-none d-md-inline-block"> Shot Tracker</span>
                    </Link>
                </li>
            </ul>
        </div>
        )
}
export default BottomDirectory;