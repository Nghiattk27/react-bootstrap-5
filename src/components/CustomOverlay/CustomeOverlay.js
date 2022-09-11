import React, { useState, useRef } from 'react';
import { Overlay, Button, OverlayTrigger, Tooltip, Image } from 'react-bootstrap';
import login from "../../images/loginNew.jpg";

function CustomeOverlay() {

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Simple tooltip
        </Tooltip>
    );

    return (
        <div>
            <OverlayTrigger
                placement="bottom"
                delay={{ show: 0, hide: 0 }}
                overlay={renderTooltip}
            >
                <Button
                    variant="light"
                    className="d-inline-flex align-items-center"
                >
                    <Image
                        // ref={ref}
                        roundedCircle
                        src={login}
                        className="fluid"
                        style={{ width: "3vw" }}
                    />
                    <span className="ms-1">Hover to see</span>
                </Button>
            </OverlayTrigger>
        </div>
    )
}

export default CustomeOverlay